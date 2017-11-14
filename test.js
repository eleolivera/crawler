  var config = {
    apiKey: "AIzaSyALWmk0kReHxDmv5HTE_sCZsjncAdqhXZ0",
    authDomain: "csunkaizen-63fee.firebaseapp.com",
    databaseURL: "https://csunkaizen-63fee.firebaseio.com",
    projectId: "csunkaizen-63fee",
    storageBucket: "csunkaizen-63fee.appspot.com",
    messagingSenderId: "947401654332"
  };  
  firebase.initializeApp(config);
// Get a reference to the database service
  var database = firebase.database();

  var update = firebase.database().ref('data/funds');
  update.on('value', function(snapshot) {
    var list = document.getElementById("funds").innerHTML="<b>Funds Raised:</b> "+ snapshot.val();
  });
  var update2 = firebase.database().ref('data/percentage');
  update2.on('value', function(snapshot) {
    var list2= document.getElementById("percentage").innerHTML="<b>Percentage to goal:</b> "+ snapshot.val();
    var pimage = document.getElementById("pimage").src= 'http://connect.chla.org/site/DynImg/progress.jpg?pi=1021&percent='+snapshot.val();
  });
