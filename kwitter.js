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

function addUser() {
    user_name=document.getElementById("user_name").value;
  localStorage.setItem("user_name" , user_name)  ;
  firebase.database().ref("/").child(user_name).update({
    purpose:"adding user" });
  window.location="kwitter_room.html";
}