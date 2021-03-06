(function () {// login
  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      window.location.replace("main.html");
    }).catch(error => alert(error.message));
  })
})(); 