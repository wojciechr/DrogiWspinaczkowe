//(function(){
//		  const config = {
//			apiKey: "AIzaSyA-ejZDxLBfqxuqcsakiY31p6iXt4cJc8M",
//			authDomain: "drogi-wspinaczkowe.firebaseapp.com",
//			databaseURL: "https://drogi-wspinaczkowe.firebaseio.com",
//			projectId: "drogi-wspinaczkowe",
//			storageBucket: "drogi-wspinaczkowe.appspot.com",
//			messagingSenderId: "81802368109"
//		  };
//		  firebase.initializeApp(config);
//		  }());
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	document.getElementById("user_div").style.display = "block";
	document.getElementById("login_div").style.display = "none";
	
	var user = firebase.auth().currentUser;
	if(user != null){
		
		var email_id=user.email;
		
		document.getElementById("user_para").innerHTML = "Welcome User : " + email 
	}
	
  } else {
    // No user is signed in.
	document.getElementById("user_div").style.display = "none";
	document.getElementById("login_div").style.display = "block";
 }
});
function login(){
		var userEmail = document.getElementById("email_field").value;
		var userPass = document.getElementById("password_field").value;
		
		
//		firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
//		var errorCode = error.code;
//		var errorMessage = error.message;
//		window.alert("Error : " errorMessage);
	  // ...
//	});
}
function logout(){
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});
	
}
function login_facebook(){
	firebase.auth.FacebookAuthProvider();	
	
	firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		});
}
