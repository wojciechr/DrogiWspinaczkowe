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
	

		firebase.auth().signInWithRedirect(provider);

		firebase.auth().getRedirectResult().then(function(result) {
		  if (result.credential) {
			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
			var token = result.credential.accessToken;
			// ...
		  }
		  // The signed-in user info.
		  var user = result.user;
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

function login_google(){

		var provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
			   firebase.auth().signInWithRedirect(provider);
				firebase.auth().getRedirectResult().then(function(result)  {
					if (result.credential) {
					  var token = result.credential.accessToken;
					  document.getElementById('user_div').textContent = token;
					} else {
					  document.getElementById('user_div').textContent = 'null';
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
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});


