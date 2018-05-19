var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

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
					
					document.getElementById("login_div").style.display = "none";
					document.getElementById("user_div").style.display = "block";

                
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
						            
			//document.getElementById('login_google').addEventListener('click',login_google_function, false);
			//document.getElementById('login_facebook').addEventListener('click',login_facebook_function, false);

                }

            });


     


