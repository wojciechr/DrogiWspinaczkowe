const config = {
    apiKey: "AIzaSyA-ejZDxLBfqxuqcsakiY31p6iXt4cJc8M",
    authDomain: "drogi-wspinaczkowe.firebaseapp.com",
    databaseURL: "https://drogi-wspinaczkowe.firebaseio.com",
    projectId: "drogi-wspinaczkowe",
    storageBucket: "drogi-wspinaczkowe.appspot.com",
    messagingSenderId: "81802368109"
  };
  firebase.initializeApp(config);
  
function dodajDroge(){	
	var firebaseRef = firebase.database().ref();
	var db = firebase.database().ref().child("Users");	
	var lastChild = db.orderByKey().limitToLast(1);
	
	lastChild.once("value", snap => {		
		var lastChildName;
		snap.forEach(function(child) {
		lastChildName = child.key;
		});
		
		var stylPrzejscia;
		var stylMoonboard = document.getElementById("moonboard_field").checked;	
		var stylSkaly = document.getElementById("skaly_field").checked;
		var stylScianka = document.getElementById("scianka_field").checked;
		
		if(stylMoonboard){
			stylPrzejscia = document.getElementById("moonboard_field").value;
		}else if(stylScianka){
			stylPrzejscia = document.getElementById("scianka_field").value;
		}else if(stylSkaly){
			stylPrzejscia = document.getElementById("skaly_field").value;
		}
		
		var typ;
		var typOS = document.getElementById("os_field").checked;
		var typFlash = document.getElementById("flash_field").checked;
		var typRP = document.getElementById("pr_field").checked;
		var typProba = document.getElementById("proba_field").checked;
		
		if(typOS){
			typ = document.getElementById("os_field").value;
		}else if(typFlash){
			typ = document.getElementById("flash_field").value;
		}else if(typRP){
			typ = document.getElementById("pr_field").value;
		}else if(typProba){
			typ = document.getElementById("proba_field").value;
		}
		
		var nazwaDrogi = document.getElementById("nazwa_field").value;
		var nazwaSkaly = document.getElementById("skala_field").value;
		var nazwaRegion = document.getElementById("region_field").value;
		var trudnosc = document.getElementById("trudnosc_field").value;
		var data = document.getElementById("datePicker").value;
		
		var dbNrTrasy = Number(lastChildName.match(/\d+/)[0])+1;
		var dbNowaNazwaTrasy = "Trasa" + dbNrTrasy.toString();
				
		var dbNazwaTrasy = db.child(dbNowaNazwaTrasy);
		db.child(dbNazwaTrasy.key).set({
			NazwaDrogi: nazwaDrogi,
			NazwaSkały: nazwaSkaly,
			NazwaRegionu: nazwaRegion,
			Typ: typ,
			Trudność: trudnosc,
			StylSrzejścia: stylPrzejscia,
			Data: data
		});		
	});
}   