
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDj2qh0kiXpgSFMdbfOYyeNKujRizw41rQ",
      authDomain: "classtest-a14e6.firebaseapp.com",
      databaseURL: "https://classtest-a14e6-default-rtdb.firebaseio.com",
      projectId: "classtest-a14e6",
      storageBucket: "classtest-a14e6.appspot.com",
      messagingSenderId: "788480410188",
      appId: "1:788480410188:web:db780af25898827cc1eae9"
    };
    firebase.initializeApp(firebaseConfig);
    var user_name = localStorage.getItem("user_name");
    document.getElementById("user name").innerHTML = "Welcome " + user_name + "!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
    }
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: " + Room_names);
      row = "<div class='room_names' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
