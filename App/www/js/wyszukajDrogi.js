const config = {
    apiKey: "AIzaSyA-ejZDxLBfqxuqcsakiY31p6iXt4cJc8M",
    authDomain: "drogi-wspinaczkowe.firebaseapp.com",
    databaseURL: "https://drogi-wspinaczkowe.firebaseio.com",
    projectId: "drogi-wspinaczkowe",
    storageBucket: "drogi-wspinaczkowe.appspot.com",
    messagingSenderId: "81802368109"
};
firebase.initializeApp(config);

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

        routes = snapshot.val()

        var typ = document.getElementById("typ_field").value;


        var table = document.getElementById("wyniki_wyszukiwania");
        var sizeOfTable = table.rows.length
        for (var i=0; i<sizeOfTable-1; i++)
        {
            table.deleteRow(1);
        }

        for (var route_key in routes) {
            route = routes[route_key];

            if (typ != "Wszystkie") {
                if (typ != route.Typ) {
                    continue;
                }
            }

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