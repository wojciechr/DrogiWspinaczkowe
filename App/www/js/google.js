

function google_login(){
 		var provider = new firebase.auth.GoogleAuthProvider();
 		
 			   firebase.auth().signInWithRedirect(provider);
 				firebase.auth().getRedirectResult().then(function(result)  {
 					if (result.credential) {
 					  var token = result.credential.accessToken;
 					  document.getElementById('quickstart-oauthtoken').textContent = token;
 					} else {
 					  document.getElementById('quickstart-oauthtoken').textContent = 'null';
 					}
 					var user = result.user;
 				  }).catch(function(error) {
 					var errorCode = error.code;
 					var errorMessage = error.message;
 					 var email = error.email;
 					var credential = error.credential;
 					if (errorCode === 'auth/account-exists-with-different-credential') {
 					  alert('You have already signed up with a different auth provider for that email.');
 					  // If you are using multiple auth providers on your app you should handle linking
 					  // the user's accounts here.
 					} else {
 					  console.error(error);
 					}
 				  });


		
}