const config = {
    apiKey: "AIzaSyA-ejZDxLBfqxuqcsakiY31p6iXt4cJc8M",
    authDomain: "drogi-wspinaczkowe.firebaseapp.com",
    databaseURL: "https://drogi-wspinaczkowe.firebaseio.com",
    projectId: "drogi-wspinaczkowe",
    storageBucket: "drogi-wspinaczkowe.appspot.com",
    messagingSenderId: "81802368109"
  };
  firebase.initializeApp(config);





 // This is called with the results from from FB.getLoginStatus().
      function statusChangeCallback(response) {
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          testAPI();
        } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
          console.log("The person is logged into Facebook, but not your app.");
        } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
        }
      }

      // This function is called when someone finishes with the Login
      // Button.  See the onlogin handler attached to it in the sample
      // code below.
      function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2065286753691545',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });

        // Now that we've initialized the JavaScript SDK, we call 
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.

        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });

      };

      // Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v3.0&appId=2065286753691545&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

      // Here we run a very simple test of the Graph API after login is
      // successful.  See statusChangeCallback() for when this call is made.
      function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log("Fb response");
          console.log(response);
          console.log('Successful login for: ' + response.name);
          document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        });
      }

  
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
                var provider = new firebase.auth.FacebookAuthProvider();
                // alert("Facebook signin");
                if (firebase.auth().currentUser) {
                // [START signout]
                firebase.auth().signOut();
				document.getElementById('login_facebook').textContent = "Facebook"

                 //[END signout]
                } else {
                    firebase.auth().signInWithRedirect(provider).then(function(result) {
						document.getElementById('login_facebook').textContent = "Facebook"
                        var token = result.credential.accessToken;
                        var user = result.user;         
                       // console.log(token)
                       // console.log(user)
                    }).catch(function(error) {
                       // console.log(error.code);
                       // console.log(error.message);
                    });
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

