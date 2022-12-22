
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBAqhMIZOT0LA4vi4po_CE55PKirTY1b6Q",
      authDomain: "kwitter-1a68c.firebaseapp.com",
      databaseURL: "https://kwitter-1a68c-default-rtdb.firebaseio.com",
      projectId: "kwitter-1a68c",
      storageBucket: "kwitter-1a68c.appspot.com",
      messagingSenderId: "30200757048",
      appId: "1:30200757048:web:0174e9d00e40468b7d5fcd",
      measurementId: "G-DLY8J7ENHW"
    };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
