function login(){
		var userEmail = document.getElementById("email_field").value;
		var userPass = document.getElementById("password_field").value;
		
		firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {

		var errorCode = error.code;
		var errorMessage = error.message;
		



});

}

firebase.auth().onAuthStateChanged(function(user) {

                //console.log(user);

                if (user) {
					
                var displayName = user.displayName;
                var email = user.email;
                var providerData = user.providerData;
					
					document.getElementById("login_div").style.display = "none";
					document.getElementById("user_div").style.display = "block";

                
						var user = firebase.auth().currentUser;

						if(user != null ){
							
							var email_id=user.email;
							
							document.getElementById("user_para").innerHTML = "Witaj : " + user.email
						
						}							
                // User is signed in.
               
				
				document.getElementById('sign_in_status').textContent = 'Poprawnie zalogowałeś się';
				


                } else {
						document.getElementById("user_div").style.display = "none";
						document.getElementById("login_div").style.display = "block";
						            
			//document.getElementById('login_google').addEventListener('click',login_google_function, false);
			//document.getElementById('login_facebook').addEventListener('click',login_facebook_function, false);

                }

            });
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
	  		facebookConnectPlugin.logout(function(){
                        console.log("FB LOGOUT SUCCESS");
						$( "#loggedas" ).html('Niezalogowany');
						$( "#loggedashome" ).html('Niezalogowanyer');
                    },function(){
                        console.log("FB LOGOUT FAIL");
                    }); 
	}).catch(function(error) {
	  // An error happened.
	});
}			


		