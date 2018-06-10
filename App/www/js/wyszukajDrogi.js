const config = {
    apiKey: "AIzaSyA-ejZDxLBfqxuqcsakiY31p6iXt4cJc8M",
    authDomain: "drogi-wspinaczkowe.firebaseapp.com",
    databaseURL: "https://drogi-wspinaczkowe.firebaseio.com",
    projectId: "drogi-wspinaczkowe",
    storageBucket: "drogi-wspinaczkowe.appspot.com",
    messagingSenderId: "81802368109"
};
firebase.initializeApp(config);

// function wyszukajDrogi(){
// 	var firebaseRef = firebase.database().ref();
//
// }

function wyszukajDrogi() {
    var logbox = document.getElementById("logbox");

    logbox.value = "1";

    var userId;

    logbox.value = "2";
    var user = firebase.auth().currentUser;
    logbox.value = "3";
    if (user) {
        userId = user.uid;
        logbox.value = "4";
    } else {
        logbox.value = "5";
        window.alert("Nie zalogowałeś się!");
        return;
    }
    logbox.value = "6";
    var userPath = "Users/" + userId;
    logbox.value = "7";
    var firebaseRef = firebase.database().ref().child(userPath);

    logbox.value = "88888";

    firebaseRef.on("value", function (snapshot) {
        console.log(snapshot.val());
        var routes = snapshot;
        logbox.value = JSON.stringify(routes.val());

        for (var route in routes.val()) {
            $("body").append("123");

            var table = document.getElementById("wyniki_wyszukiwania");
            var row = table.insertRow(1);

            var droga = row.insertCell(0);
            var skala = row.insertCell(1);
            var region = row.insertCell(2);
            var styl = row.insertCell(3);
            var trudnosc = row.insertCell(4);
            var data = row.insertCell(5);
            droga.innerHTML = route[0].NazwaDrogi;
            skala.innerHTML = route[0].NazwaSkały;
            region.innerHTML = route[0].NazwaRegionu;
            styl.innerHTML = route[0].StylSrzejścia;
            trudnosc.innerHTML = route[0].Trudność;
            data.innerHTML = route[0].Data;
            $("body").append("456 ");
        }

    }, function (error) {
        console.log("Error: " + error.code);
    });


}