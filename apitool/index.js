//Initially created a get method in service Call
var HttpClient = function() {
    this.get = function(aUrl , aCallback){
        var aHttpRequest = new XMLHttpRequest();
        aHttpRequest.onreadystatechange = function() {
            if(aHttpRequest.readyState == 4 && aHttpRequest.status==200)
                aCallback(aHttpRequest.responseText);
            }
            aHttpRequest.open("GET",aUrl,true);
            aHttpRequest.send(null);
        }
}

var theURL = "https://jsonplaceholder.typicode.com/posts";


//Updating the default URL with the input URL
function getURL(){
    if(document.getElementById("url")!=null){
        theURL = document.getElementById("url").value;
    }
    console.log(theURL)
}

//Service call for get
function getServiceCall(){
    getURL();
    var client = new HttpClient();
    client.get(theURL, (err,response)=> {
        console.log("response") 
    });
}

//Performance test runner
var iterations = 100;
console.time('Function #1');
for(var i = 0; i < iterations; i++ ){
    getServiceCall();
};
console.timeEnd('Function #1')