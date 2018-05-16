const config = {
    apiKey: "AIzaSyA-ejZDxLBfqxuqcsakiY31p6iXt4cJc8M",
    authDomain: "drogi-wspinaczkowe.firebaseapp.com",
    databaseURL: "https://drogi-wspinaczkowe.firebaseio.com",
    projectId: "drogi-wspinaczkowe",
    storageBucket: "drogi-wspinaczkowe.appspot.com",
    messagingSenderId: "81802368109"
};
firebase.initializeApp(config);

function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        document.getElementById('sign_in_status').textContent = 'Zostałeś poprawnie wylogowany';
    }).catch(function (error) {
        // An error happened.
    });

}

function login_google() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({'login_hint': 'user@example.com'});

    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // ...
        }
        // The signed-in user info.
        var user = result.user;
        var b = document.getElementById('login_google');
        b.style.color = 'red';
    }).catch(function (error) {
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


function initApp() {

    firebase.auth().onAuthStateChanged(function (user) {

        //console.log(user);
        var user = firebase.auth().currentUser;

        if (user) {

            var displayName = user.displayName;
            var email = user.email;

            document.getElementById("user_div").style.display = "block";
            document.getElementById("login_div").style.display = "none";


        } else {

            document.getElementById("user_div").style.display = "none";
            document.getElementById("login_div").style.display = "block";

        }

    });

    document.getElementById('login_google').addEventListener('click', login_google, false);
    document.getElementById('login_facebook').addEventListener('click', login_facebook_function, false);

}


window.onload = function () {
    initApp();
};

