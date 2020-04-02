(function () {// reset email
  const resetForm = document.querySelector("#reset-form");
  resetForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // get email input
      const email = resetForm["reset-email"].value;

      // send password reset email
      auth.sendPasswordResetEmail(email).then(function() {
        alert("E-mail sent");
      }).catch(error => alert(error.message));
  })
})();