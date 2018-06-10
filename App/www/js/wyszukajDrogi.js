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
    var userId;

    var user = firebase.auth().currentUser;
    if (user) {
        userId = user.uid;
    } else {
        window.alert("Nie zalogowałeś się!");
        return;
    }
    var userPath = "Users/" + userId;
    var firebaseRef = firebase.database().ref().child(userPath);

    firebaseRef.on("value", function (snapshot) {

        var typ = document.getElementById("typ_field").value;

        for (var route_key in snapshot.val()) {
            route = routes[route_key];

            $("body").append("droga ");

            if (typ != "Wszystkie") {
                $("body").append("nie wszystkie ");
                if (typ != route.Typ) {
                    $("body").append("nie moj typ ");
                    continue;
                }
                $("body").append("moj typ ");
            }
            $("body").append("wpisujemy ");

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