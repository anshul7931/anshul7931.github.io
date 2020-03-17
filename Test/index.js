$(document).ready(function(){
    $.ajax({
        url:"https://www.bing.com/covid/data?IG=BD288EBFB83345808DC89A138173CFF4",
        dataType:"text",
        crossDomain: true,
        cors:true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        contentType:'application/json',
        secure: true,
        success:function(data){
            console.log(data);
        }
    });
});
