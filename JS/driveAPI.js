$(document).ready(function(){

    var clientId = "394426612038-21hc3j9lr4l6rjfqlkvvkskd3naa9g1f.apps.googleusercontent.com";
    var redirect_uri = "http://localhost/dropZone/home.html";
    var scope = "https://www.googleapis.com/auth/drive";
    var url = "";

    $(".loginButton").click(function(){

    signIn(clientId,redirect_uri,scope,url);

    });

    function signIn(clientId,redirect_uri,scope,url){
    
    url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=" + redirect_uri
    + "&prompt=consent&response_type=code&client_id=" + clientId + "&scope=" + scope
    + "&access_type=offline";

    window.location = url;
    }
});