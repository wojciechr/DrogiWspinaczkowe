const config = {
    apiKey: "AIzaSyA-ejZDxLBfqxuqcsakiY31p6iXt4cJc8M",
    authDomain: "drogi-wspinaczkowe.firebaseapp.com",
    databaseURL: "https://drogi-wspinaczkowe.firebaseio.com",
    projectId: "drogi-wspinaczkowe",
    storageBucket: "drogi-wspinaczkowe.appspot.com",
    messagingSenderId: "81802368109"
  };
  firebase.initializeApp(config);


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2065286753691545',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });
    FB.AppEvents.logPageView();   
-      
-  };

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v3.0&appId=2065286753691545&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function login(){
		var userEmail = document.getElementById("email_field").value;
		var userPass = document.getElementById("password_field").value;
		
		firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {

		var errorCode = error.code;
		var errorMessage = error.message;



});

}
function register (){
		var userEmail = document.getElementById("email_field").value;
		var userPass = document.getElementById("password_field").value;
			
			firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
			console.log(error);
});
	
}

function logout(){
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  document.getElementById('sign_in_status').textContent = 'Zostałeś poprawnie wylogowany';
	}).catch(function(error) {
	  // An error happened.
	});
	
}
function login_facebook_function(){
if (!firebase.auth().currentUser) {

    var provider = new firebase.auth.FacebookAuthProvider();

    provider.addScope('user_birthday');

    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;

      var userFace = result.user;
      var uidFace = userFace['providerData'][0]['uid']
      console.log(uidFace)
      var emailFace = result.user['providerData'][0]['email']
      console.log(emailFace)
      localStorage.setItem('userId', uidFace)
      localStorage.setItem('userEmail', emailFace)

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

  } else {

    firebase.auth().signOut();

  }

}



function login_google_function() {
                var provider = new firebase.auth.GoogleAuthProvider();
                // alert("Google signin");
                if (firebase.auth().currentUser) {
                // [START signout]
                firebase.auth().signOut();
                document.getElementById('login_google').textContent = "Google"

                // [END signout]
                } else {
                    firebase.auth().signInWithRedirect(provider).then(function(result) {
                        document.getElementById('login_google').textContent = "Google"
                        var token = result.credential.accessToken;
                        var user = result.user;   
                       // console.log(token);
                       // console.log(user);
                    }).catch(function(error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;      
                       // console.log(error.code);
                       // console.log(error.message);
                    });
                }
            }
			
			
function initApp() {

            firebase.auth().onAuthStateChanged(function(user) {

                //console.log(user);

                if (user) {
					
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
					document.getElementById("user_div").style.display = "block";
					document.getElementById("login_div").style.display = "none";

                
						var user = firebase.auth().currentUser;

						if(user != null ){
							
							var email_id=user.email;
							var display = {
								uid:user.uid,
								displayName:user.displayName,
								photoURL:user.photoURL,
								email:user.email,
								phoneNumber : user.phoneNumber,

							};
							
							document.getElementById("user_para").innerHTML = "Witaj : " + user.email
						
						}							
                // User is signed in.
               
				
				document.getElementById('sign_in_status').textContent = 'Poprawnie zalogowałeś się';
				


                } else {
						document.getElementById("user_div").style.display = "none";
						document.getElementById("login_div").style.display = "block";

                }

            });

            document.getElementById('login_google').addEventListener('click',login_google_function, false);
			document.getElementById('login_facebook').addEventListener('click',login_facebook_function, false);

        }
window.onload = function() {
  initApp();
  };

