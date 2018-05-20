firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	console.log("User logged");
    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      console.log("Welcome User : " + email_id);

    }

  } 
});