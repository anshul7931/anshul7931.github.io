Edit the recipe
Change content for all cusines
Handle spaces case while writing data
Avoid background scroll on overlay


//Is the user authenticated?
if (sessionStorage.getItem('AuthenticationState') === null) {
   window.open("AccessDenied.html", "_self");
}
//Is their authentication token still valid?
else if (Date.now > new Date(sessionStorage.getItem('AuthenticationExpires'))) {
      window.open("AccessDenied.html", "_self");
}
else {
  //The user is authenticated and the authentication has not expired.
}