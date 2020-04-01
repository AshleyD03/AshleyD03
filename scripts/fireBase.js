var app_fireBase = {};
(function(){// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC92Hy72m4DFhfpoBDVrz6Ejd_BF82EfQs",
    authDomain: "login-project-c5ade.firebaseapp.com",
    databaseURL: "https://login-project-c5ade.firebaseio.com",
    projectId: "login-project-c5ade",
    storageBucket: "login-project-c5ade.appspot.com",
    messagingSenderId: "410696702324",
    appId: "1:410696702324:web:c03fd1e1e02efdbd517421"
  };
  firebase.initializeApp(firebaseConfig);

  app_fireBase = firebase;
  auth = firebase.auth();
})()  
