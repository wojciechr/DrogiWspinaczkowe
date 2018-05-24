function loginFirebase() {
		
		$('#logingoogle').click(function() {
			 window.plugins.googleplus.login(
        {
                 'webClientId' : '81802368109-8pomelv41akmrkb2vrmu6fhuch8bet5s.apps.googleusercontent.com',
                 'offline': true
        },
        function (obj) {

		console.log(obj);
             console.log("Hello, " + obj.displayName + ", " + obj.email);
			 alert("Poprawnie zalogowano");
            if (!firebase.auth().currentUser) {
               console.log('signing firebase');
					console.log(obj.idToken);
                firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(obj.idToken))
                .then((success) => {
                    console.log("success: " + JSON.stringify(success)); // to long json to put it in #feedback
                })
                .catch((error) => {
                        console.log("error0: " + JSON.stringify(error));
                      });
            }else{
                console.log('error1: already sigend in firebase');
            }
        },
        function (msg) {
          console.log("error2: " + msg);
        }
    );	
	
	});
	
		
	$('#loginfacebook').click(function() {
	
		facebookConnectPlugin.getLoginStatus(
            function (status) {
                console.log("current status: " + JSON.stringify(status));
				
            },
            function (error) {
                console.log("Something went wrong: " + JSON.stringify(error));
            }
	 );
	 
	facebookConnectPlugin.login(["email"],function(result){
			console.log("logowanie:");
			//alert("Poprawnie zalogowano");

			 console.log("RESULT:" + JSON.stringify(result));
			  console.log("RESULT2:" + JSON.stringify(result.authResponse));
			  console.log("RESULT3:" + JSON.stringify(result.authResponse.accessToken));
			  
				firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(result.authResponse.accessToken))
					.then((success) => {
						console.log("success: " + JSON.stringify(success)); 
				   })
				  
		//calling api after login success
		 facebookConnectPlugin.api("/me?fields=email,name,picture",["public_profile","email"]
		 ,function(userData){
			 //API success callback
			 alert("Poprawnie zalogowano" + JSON.stringify(userData));
			 			document.getElementById("user_div").style.display = "none";
						document.getElementById("login_div").style.display = "block";
		  },function(error){
			 //API error callback
			 console.log(JSON.stringify(error));
		  });
	   },function(error){
		  //authenication error callback
		 console.log(JSON.stringify(error));
		 });
	
	});
	


}  

  
  


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}




function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}	

function onDeviceReady() {
	loginFirebase();
}	