
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBDTjP1lA6CRar_JpIv5JoCIIQUs8bVpBY",
  authDomain: "final-project-87f50.firebaseapp.com",
  projectId: "final-project-87f50",
  storageBucket: "final-project-87f50.appspot.com",
  messagingSenderId: "770017945169",
  appId: "1:770017945169:web:19690116011da1c06ffa70"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Successfully signed up");

    window.location.replace("map.html");


    //redirect
  }

  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Successfully signed in");

    window.location.replace("map.html");

  }

  function signOut(){
    auth.signOut();
    alert("Signed Out");
  }

  auth.onAuthStateChanged(function(user){
    if(user){
      var email = user.email;
      alert("Active User " + email);

    } else{
      alert("No user is signed in")
    }
  });