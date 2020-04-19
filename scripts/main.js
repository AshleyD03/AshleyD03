var mainApp = {};

(function () {
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
      console.log("Wellcome " + user["email"]);

      document.getElementById("email").innerHTML = user["displayName"];

      // Get elements
      var uploader = document.getElementById("uploader");
      var fileButton = document.getElementById("fileButton");

      // Listen for file selection
      fileButton.addEventListener("change", function (e) {
        // Get file
        var file = e.target.files[0];

        // Create a storage refd
        var storageRef = firebase
          .storage()
          .ref(user["displayName"] + "/" + file.name);

        // Upload file
        var task = storageRef.put(file);

        // Update progress bar
        task.on(
          "state_changed",

          function progress(snapshot) {
            var percentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
          },

          function error(err) {},

          function complete() {
              console.log("complete")
          }
        );
      });
    } else {
      // redirect to login page
      uid = null;
      window.location.replace("index.html");
    }
  });

  function logOut() {
    firebase.auth().signOut();
  }

  mainApp.logOut = logOut;
})();