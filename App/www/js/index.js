/*(function(){
		  const config = {
			apiKey: "AIzaSyA-ejZDxLBfqxuqcsakiY31p6iXt4cJc8M",
			authDomain: "drogi-wspinaczkowe.firebaseapp.com",
			databaseURL: "https://drogi-wspinaczkowe.firebaseio.com",
			projectId: "drogi-wspinaczkowe",
			storageBucket: "drogi-wspinaczkowe.appspot.com",
			messagingSenderId: "81802368109"
		  };
		  firebase.initializeApp(config);
		  }());*/

  // Initialize Firebase
 const config = {
    apiKey: "AIzaSyA-ejZDxLBfqxuqcsakiY31p6iXt4cJc8M",
    authDomain: "drogi-wspinaczkowe.firebaseapp.com",
    databaseURL: "https://drogi-wspinaczkowe.firebaseio.com",
    projectId: "drogi-wspinaczkowe",
    storageBucket: "drogi-wspinaczkowe.appspot.com",
    messagingSenderId: "81802368109"
  };
  firebase.initializeApp(config);

function login(){
		var userEmail = document.getElementById("email_field").value;
		var userPass = document.getElementById("password_field").value;
		
		firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		//		window.alert("Error : " errorMessage);


});

}
function register (){
		var userEmail = document.getElementById("email_field").value;
		var userPass = document.getElementById("password_field").value;
			
			firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
			console.log(error);
});
	
}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	document.getElementById("user_div").style.display = "block";
	document.getElementById("login_div").style.display = "none";
	
	var user = firebase.auth().currentUser;
	if(user != null){
		
		var email_id=user.email;
		
		document.getElementById("user_para").innerHTML = "Witaj : " + user.email 
	}
	
  } else {
    // No user is signed in.
	document.getElementById("user_div").style.display = "none";
	document.getElementById("login_div").style.display = "block";
 }
});

function logout(){
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});
	
}
function login_facebook(){
			var provider = new firebase.auth.FacebookAuthProvider();

			provider.addScope('user_birthday');

			firebase.auth().signInWithRedirect(provider);

			firebase.auth().getRedirectResult().then(function(authData) {
				console.log(authData);
			}).catch(function(error) {
				console.log(error);
			});
}

function login_google(){

			var provider = new firebase.auth.GoogleAuthProvider();

			provider.addScope('https://www.googleapis.com/auth/plus.login');

			firebase.auth().signInWithRedirect(provider);

			firebase.auth().getRedirectResult().then(function(authData) {
				console.log(authData);
			}).catch(function(error) {
				console.log(error);
});
							
}
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});


