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

        routes = snapshot.val()

        $("body").append("pobieranie typu ");
        var typ = document.getElementById("typ_field").value;

        $("body").append("typ pobrany ");

        var table = document.getElementById("wyniki_wyszukiwania");
        var sizeOfTable = table.rows.length
        for (var i=0; i<sizeOfTable-1; i++)
        {
            table.deleteRow(1);
        }

        for (var route_key in routes) {
            $("body").append("droga1 ");
            route = routes[route_key];

            $("body").append("droga2 ");

            if (typ != "Wszystkie") {
                $("body").append("nie wszystkie ");
                if (typ != route.Typ) {
                    $("body").append("nie moj typ ");
                    continue;
                }
                $("body").append("moj typ ");
            }
            $("body").append("wpisujemy ");


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