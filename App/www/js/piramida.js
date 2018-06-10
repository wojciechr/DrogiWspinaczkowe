const config = {
    apiKey: "AIzaSyA-ejZDxLBfqxuqcsakiY31p6iXt4cJc8M",
    authDomain: "drogi-wspinaczkowe.firebaseapp.com",
    databaseURL: "https://drogi-wspinaczkowe.firebaseio.com",
    projectId: "drogi-wspinaczkowe",
    storageBucket: "drogi-wspinaczkowe.appspot.com",
    messagingSenderId: "81802368109"
};
firebase.initializeApp(config);

function getData() {
    // var userId;
    //
    // var user = firebase.auth().currentUser;
    // if (user) {
    //     userId = user.uid;
    // } else {
    //     window.alert("Nie zalogowałeś się!");
    //     return;
    // }
    // var userPath = "Users/" + userId;
    // var firebaseRef = firebase.database().ref().child(userPath);
    //
    // firebaseRef.on("value", function (snapshot) {


        // routes = snapshot.val()

    routes ={
        "Trasa01": {
            "Data": "2018-06-08",
            "NazwaDrogi": "Skurwysyn",
            "NazwaRegionu": "Tyniec",
            "NazwaSkały": "Skurwysyn",
            "StylSrzejścia": "OS",
            "Trudność": "7a+",
            "Typ": "Skały"
        },
        "Trasa02": {
            "Data": "2018-06-08",
            "NazwaDrogi": "Skurwysyn",
            "NazwaRegionu": "Tyniec",
            "NazwaSkały": "Przdskurwysyn",
            "StylSrzejścia": "RP",
            "Trudność": "7b",
            "Typ": "Ścianka"
        },
        "Trasa03": {
            "Data": "2018-06-08",
            "NazwaDrogi": "Wawrzynegger",
            "NazwaRegionu": "Tyniec",
            "NazwaSkały": "Skurwysyn",
            "StylSrzejścia": "Proba",
            "Trudność": "8a",
            "Typ": "Skały"
        }
    };


        var dict = [];
        var grades = ["5a","5a+","5b","5b+","5c","5c+",
                      "6a","6a+","6b","6b+","6c","6c+",
                      "7a","7a+","7b","7b+","7c","7c+",
                      "8a","8a+","8b","8b+","8c","8c+",
                      "9a","9a+","9b","9b+","9c","9c+"];
        for(var i in grades) {
            dict.push({key: grades[i], value: [0, 0, 0]});
        }

        // var labels = ["9c", "9b+", "9b", "9a+", "9a", "8c+", "8c"];
        // var dataRP = [1, 3, 18, 35, 95, 119, 105];
        // var dataFL = [0, 0, 0, 1, 2, 1, 1];
        // var dataOS = [0, 0, 0, 0, 3, 18, 58];

        var labels = [];
        var dataOS = [];
        var dataFL = [];
        var dataRP = [];

        for (var route_key in routes) {
            route = routes[route_key];

            // if (typ != "Wszystkie") {
            //     $("body").append("nie wszystkie ");
            //     if (typ != route.Typ) {
            //         $("body").append("nie moj typ ");
            //         continue;
            //     }
            // }

            var styl = route.StylSrzejścia;
            var trudnosc = route.Trudność;

            console.log(styl);
            console.log(trudnosc);
            console.log(dict);
            console.log(dict["7a+"]);
            console.log(dict[trudnosc]);

            if (styl == "OS"){
                dict[trudnosc][0] = dict[trudnosc][0] + 1;
            } else if (styl == "Flash") {
                dict[trudnosc][1] = dict[trudnosc][1] + 1;
            } else if (styl == "RP") {
                dict[trudnosc][2] = dict[trudnosc][2] + 1;
            }

        }

        for (var key in dict) {
            var value = dict[key]
            if (value[0]+value[1]+value[2] > 0) {
                labels.append(key);
                dataOS.append(value[0]);
                dataFL.append(value[1]);
                dataRP.append(value[2]);
            }
        }

        var data = {
            labels: labels,
            datasets: [{
                data: dataRP,
                backgroundColor: "rgba(63,103,126,1)",
                hoverBackgroundColor: "rgba(50,90,100,1)"
            }, {
                data: dataFL,
                backgroundColor: "rgba(163,103,126,1)",
                hoverBackgroundColor: "rgba(140,85,100,1)"
            }, {
                data: dataOS,
                backgroundColor: "rgba(63,203,226,1)",
                hoverBackgroundColor: "rgba(46,185,235,1)"
            }]
        };
        return data;


    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });


}