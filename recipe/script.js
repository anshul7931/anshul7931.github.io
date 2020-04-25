// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD0mKbEZNXtLsr3BHTRBnDE2gILl6z-QCI",
    authDomain: "mastering-cooking.firebaseapp.com",
    databaseURL: "https://mastering-cooking.firebaseio.com",
    projectId: "mastering-cooking",
    storageBucket: "mastering-cooking.appspot.com",
    messagingSenderId: "346765226246",
    appId: "1:346765226246:web:d91df0ce3ab8d8e21d2e87",
    measurementId: "G-W8LXEXN8V4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//Blank and null checks for all necessary parameters while adding Recipe
function writeData() {
    showSpinner();
    var nameField = document.getElementById("nameField");
    var descriptionField = document.getElementById("descriptionField");
    var uploadFileField = document.getElementById("fileName");
    if (nameField.value == "" || descriptionField.value == "" || uploadFileField.value == "") {
        hideSpinner();
        alert("Please enter all the fields and upload the file");
    } else {
        uploadFile();
    }
}

//Push all the data to firebase realtime database
function pushReferenceToFirebase(downloadURL) {
    var dishType = document.getElementById("dishes").value;
    firebase.database().ref("Recipe/"+dishType).push({
        name: document.getElementById("nameField").value,
        description: document.getElementById("descriptionField").value,
        dish: dishType,
        image: downloadURL
    }, function (error) {
        hideSpinner();
        if (error) {
            alert("Unable to save data!");
        } else {
            alert("Data saved successfully");
            nameField.value = "";
            descriptionField.value = "";
            document.getElementById("fileName").value = "";
        }
    });
}

//Open cuisine page according to selected card from home page
//Changed cuisine to multiple Indian types
function getCuisineAndOpenCuisinePage(dish) {
    window.location.href = 'dish.html?dish=' + dish;
}

//On click of login button
function onLogin(){
    var usernamevalue = document.getElementById("username").value;
    var passwordvalue = document.getElementById("password").value;
    if(usernamevalue && passwordvalue){
        showSpinner();
        firebase.auth().signInWithEmailAndPassword(usernamevalue, passwordvalue).then(function(){
            window.location.href="AddRecipe.html";
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Some Error Occured")
          });
    }else{
        alert("Please enter valid credentials");
    }
}


function checkAuthState(){
    //When a user logs in
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
                window.location.href = 'AddRecipe.html';
        }else{
                window.location.href = 'login.html';
        }
    });
}

function checkAuthStateOnLoginPage(){
    //When a user logs in
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
                window.location.href = 'AddRecipe.html';
        }
    });
    hideSpinner();
}

function checkAuthStateOnAddRecipePage(){
    //When a user logs in
    firebase.auth().onAuthStateChanged(function(user){
        if(!user){
                window.location.href = 'login.html';
        }
    });
    hideSpinner();
}

//Constructing cuisine card view
function extractURLAndFetchDataAccordingToCuisineName() {
    showSpinner();
    var url = window.location.href;
    var dishType = url.split("?")[1].split("=")[1];

    firebase.database().ref('/Recipe/'+dishType).once('value', function (snapshot) {
        var count = 0;
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            var card = document.createElement("DIV");
            card.id = "DishDetails";
            card.className = "jumbotron card";

            if (childData['dish'] == dishType) {

                var cardHeader = document.createElement("DIV");
                cardHeader.className = "card-header";
                var headingNode = document.createElement("H5");
                headingNode.id = "DishName";
                headingNode.className = "card-title";
                var headingContent = document.createTextNode(childData['name']);
                headingNode.appendChild(headingContent);
                cardHeader.append(headingNode);


                var cardBody = document.createElement("DIV");
                cardBody.className = "card-body";
                cardBody.id = "DishBody";

                var cross = document.createElement("DIV");
                cross.id = "cross";
                cross.setAttribute('align', 'right');
                cross.textContent = 'X';
                // firebase.auth().onAuthStateChanged(function(user){
                //     if(!user){
                            cross.style.display="none";
                //     }
                // });

                //Dish Image
                var imageContainer = document.createElement("DIV");
                imageContainer.id = "ImageContainer";
                var imageNode = document.createElement("IMG");
                imageNode.className = "card-img-top rounded";
                imageNode.id = "DishImage";
                imageNode.setAttribute('src', childData['image']);
                imageNode.setAttribute('alt', "Dish Image");
                imageContainer.appendChild(imageNode);


                var paragraphNode = document.createElement("PRE");
                paragraphNode.id = "DishDescription";
                paragraphNode.className = "card-text";
                var paragraphContent = document.createTextNode(childData['description']);
                paragraphNode.appendChild(paragraphContent);
                cardBody.append(paragraphNode);


                count++;

                var lineBreakTag = document.createElement("BR");


                card.setAttribute("data-id", childSnapshot.key);
                card.append(cross);
                card.append(imageContainer);
                card.append(cardHeader);
                card.append(cardBody);
                card.append(lineBreakTag);


                cross.addEventListener('click', (e) => {
                    e.stopPropagation();
                    let id = e.target.parentElement.getAttribute('data-id');
                    deleteRecipe(id);
                });

                card.addEventListener('click', (e) => {
                   turnOnOverlayUsingEvent(e);
                });
                document.getElementById("cuisinedata").appendChild(card);
            }
            
        });
        hideSpinner();
        if (count == 0) {
            document.getElementById("noResultsFound").innerHTML = "No Results found for this dish type";
        }
    });
}

//Delete Recipe
function deleteRecipe(id) {
    var url = window.location.href;
    var dishType = url.split("?")[1].split("=")[1];
    if (getConfirmation() == true) {
        firebase.database().ref('/Recipe/'+dishType+'/' + id).once('value', function (snapshot) {
            var imageURL = snapshot.val().image;
            var nameOfTheImageToBeDeleted = imageURL.split('?')[0].split('%2F')[1];
            var storageRef = firebase.storage().ref('/dishesImages/'+dishType);
            storageRef.child(nameOfTheImageToBeDeleted).delete().then(function () {
                firebase.database().ref('/Recipe/' +dishType+'/' + id).remove();
                location.reload(false);
            }).catch(function (error) {
                firebase.database().ref('/Recipe/' +dishType+'/' + id).remove();
                location.reload(false);
            });

        });
    }
}

function compress(source_img_obj, quality, output_format, callback) {
    var mime_type = "image/jpeg";
    if (output_format == "png") {
        mime_type = "image/png";
    }
    var image = new Image();
    image.onload = function() {
        var cvs = document.createElement('canvas');
        cvs.width = image.naturalWidth;
        cvs.height = image.naturalHeight;
        var ctx = cvs.getContext("2d").drawImage(image, 0, 0);
        var newImageData = cvs.toDataURL(mime_type, quality / 100);
        var result_image_obj = new Image();
        result_image_obj.src = newImageData;
        callback(result_image_obj);
    };
    image.src = source_img_obj
}

//Store image to storage and fetch image URL.Further call pushReferenceToFirebase method with imageURL as parameter
function uploadFile() {

    var dishType = document.getElementById("dishes").value;
    //var uploadTask = null;
    var fileReference = document.getElementById("fileName").files[0];
    compress(window.URL.createObjectURL(fileReference), 30, "jpeg", 
    function(img){
        var filename = Math.random().toString(36).slice(2).concat(fileReference.name);

        var storageRef = firebase.storage().ref('/dishesImages/'+dishType+'/' + filename);
        //uploadTask = storageRef.put(fileReference);// Add Reference
        var image = img.src;
        var imageToUpload = image.split(',')!=null ? image.split(',')[1] : image;
        var uploadTask = storageRef.putString(imageToUpload, 'base64', {contentType:'image/jpeg'})
        // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
        }
    }, function (error) {
        alert("There is some issue while uploading the image");
        // Handle unsuccessful uploads
    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            pushReferenceToFirebase(downloadURL);//Now store the generated URL in realtime database
        });
    });
    });
    
}

//Uttilities

function turnOnOverlay(cardHTML) {
    document.getElementById("overlayCard").innerHTML = cardHTML;
    document.getElementById("overlay").style.display = "block";
}

function turnOffOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function hideSpinner() {
    var spinner = document.getElementById("spinner");
    spinner.style.visibility = "hidden";
}

function showSpinner() {
    var spinner = document.getElementById("spinner");
    spinner.style.visibility = "visible";
}

//For file deletion
function getConfirmation() {
    var retVal = confirm("Do you want to continue ?");
    if (retVal == true) {
        return true;
    } else {
        return false;
    }
}

function turnOnOverlayUsingEvent(e){
    e.stopPropagation();
    var isCardView = e.target.classList.contains('card');
    var div = e.target;
    while(isCardView!=true){
        div = div.parentElement;
        isCardView = div.classList.contains('card');
    }
    var div = div.innerHTML;
    turnOnOverlay(div);
}