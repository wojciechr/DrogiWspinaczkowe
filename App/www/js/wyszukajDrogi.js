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

    var routes;

    firebaseRef.on("value", function (snapshot) {
        console.log(snapshot.val());
        routes = snapshot.val();
        logbox.value = JSON.stringify(routes);

        for (var route in routes) {
            logbox.value = route.val();
            logbox1.value = route;
            logbox2.value = JSON.stringify(route);
            logbox3.value = JSON.stringify(route.val());

            var table = document.getElementById("wyniki_wyszukiwania");
            var row = table.insertRow(1);

            var droga = row.insertCell(0);
            var skala = row.insertCell(1);
            var region = row.insertCell(2);
            var styl = row.insertCell(3);
            var trudnosc = row.insertCell(4);
            var data = row.insertCell(5);
            droga.innerHTML = route.NazwaDrogi;
            skala.innerHTML = route.NazwaSkały;
            region.innerHTML = route.NazwaRegionu;
            styl.innerHTML = route.StylSrzejścia;
            trudnosc.innerHTML = route.Trudność;
            data.innerHTML = route.Data;
        }

    }, function (error) {
        console.log("Error: " + error.code);
    });


}