 var firebaseConfig = {
    apiKey: "AIzaSyAS_HheqFK98UIvjtiBxtHSOkOfuaOkkug",
    authDomain: "kwit-5dde3.firebaseapp.com",
    databaseURL: "https://kwit-5dde3-default-rtdb.firebaseio.com",
    projectId: "kwit-5dde3",
    storageBucket: "kwit-5dde3.appspot.com",
    messagingSenderId: "692601571855",
    appId: "1:692601571855:web:03e8538f22f47202a5f17a"
  };
  
  firebase.initializeApp(firebaseConfig);

  function load(){
    document.getElementById("user").innerHTML = "User: " + localStorage.getItem("name");

  }

    function logout(){
        window.location = "index.html";
    }