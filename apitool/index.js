//Initially created a get method in service Call
var HttpClient = function() {
    this.get = function(aUrl , aCallback){
        var aHttpRequest = new XMLHttpRequest();
        aHttpRequest.onreadystatechange = function() {
            if(aHttpRequest.readyState == 4 && aHttpRequest.status==200)
                aCallback(aHttpRequest.responseText);
            }
          
            aHttpRequest.onload = () => {
                console.log(`Data Loaded: ${aHttpRequest.status} ${aHttpRequest.response}`);
            };
            
            // listen for `error` event
            aHttpRequest.onerror = () => {
                console.error('Request is failed.Please check for the issue.');
            }
            
            // listen for `progress` event
            aHttpRequest.onprogress = (event) => {
                // event.loaded returns how many bytes are downloaded
                // event.total returns the total number of bytes
                // event.total is only available if server sends `Content-Length` header
                console.log(`Downloaded ${event.loaded} of ${event.total}`);
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