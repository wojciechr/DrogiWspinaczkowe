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

    // snapshot = {
    //     "Trasa01": {
    //         "Data": "2018-06-08",
    //         "NazwaDrogi": "Skurwysyn",
    //         "NazwaRegionu": "Tyniec",
    //         "NazwaSkały": "Skurwysyn",
    //         "StylSrzejścia": "OS",
    //         "Trudność": "7a+",
    //         "Typ": "Skały"
    //     },
    //     "Trasa02": {
    //         "Data": "2018-06-08",
    //         "NazwaDrogi": "Skurwysyn",
    //         "NazwaRegionu": "Tyniec",
    //         "NazwaSkały": "Przdskurwysyn",
    //         "StylSrzejścia": "RP",
    //         "Trudność": "7b",
    //         "Typ": "Ścianka"
    //     },
    //     "Trasa03": {
    //         "Data": "2018-06-08",
    //         "NazwaDrogi": "Wawrzynegger",
    //         "NazwaRegionu": "Tyniec",
    //         "NazwaSkały": "Skurwysyn",
    //         "StylSrzejścia": "Proba",
    //         "Trudność": "8a",
    //         "Typ": "Skały"
    //     }
    // };
        var routes = snapshot;
        // logbox.value = JSON.stringify(routes.val());

        for (var route_key in routes) {
            if (routes.hasOwnProperty(route_key)) {
                $("body").append("1 ");
            }
            route = routes[route_key];

            var table = document.getElementById("wyniki_wyszukiwania");
            var row = table.insertRow(1);

            var droga = row.insertCell(0);
            var skala = row.insertCell(1);
            var region = row.insertCell(2);
            var styl = row.insertCell(3);
            var trudnosc = row.insertCell(4);
            var data = row.insertCell(5);

            $("body").append("2 ");

            droga.innerHTML = route.NazwaDrogi;
            skala.innerHTML = route.NazwaSkały;
            region.innerHTML = route.NazwaRegionu;
            styl.innerHTML = route.StylSrzejścia;
            trudnosc.innerHTML = route.Trudność;
            data.innerHTML = route.Data;
            $("body").append("3 ");
        }

    }, function (error) {
        console.log("Error: " + error.code);
    });


}