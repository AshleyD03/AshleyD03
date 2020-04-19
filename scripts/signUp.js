(function () {// signup
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get user info
        const userName = signupForm['signup-displayname'].value;
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        // sign up the user
        auth.createUserWithEmailAndPassword(email, password).then(function (result){
            return result.user.updateProfile({
                displayName: userName
            })
        }).then(cred => {
            window.location.replace("main.html")
        }).catch(error => alert(error.message));
    });
})();
