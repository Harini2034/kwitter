
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA1HguA2UcstyqjGRmSxO8_6va0k9wZCvc",
      authDomain: "kwitter-2dd7f.firebaseapp.com",
      databaseURL: "https://kwitter-2dd7f-default-rtdb.firebaseio.com",
      projectId: "kwitter-2dd7f",
      storageBucket: "kwitter-2dd7f.appspot.com",
      messagingSenderId: "662540088057",
      appId: "1:662540088057:web:15543b94f2a18a46b8e828"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      function addRoom()
      {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({purpose : "ading room name"});
             
            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       row =  "<div class= 'room_name' id="+Room_names+"  onclick= 'redirectToRoomName(this.id)' > </div>#"+ Room_names +"</div> <hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "kwitter.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name, message:msg, like:0 });
      document.getElementById("msg").value = "";
}

