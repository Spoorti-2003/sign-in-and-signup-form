// --------------------- LOGIN VALIDATION ---------------------

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let email = document.getElementById("loginEmail").value.trim();
            let password = document.getElementById("loginPassword").value.trim();

            let emailError = document.getElementById("loginEmailError");
            let passwordError = document.getElementById("loginPasswordError");

            emailError.textContent = "";
            passwordError.textContent = "";

            let valid = true;

            if (email === "") {
                emailError.textContent = "Email is required";
                valid = false;
            } else if (!email.includes("@") || !email.includes(".")) {
                emailError.textContent = "Enter a valid email";
                valid = false;
            }

            if (password === "") {
                passwordError.textContent = "Password is required";
                valid = false;
            } else if (password.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                valid = false;
            }

            if (valid) {
                alert("Login Successful!");
                loginForm.reset();
            }
        });
    }

    // --------------------- SIGNUP VALIDATION ---------------------

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let email = document.getElementById("signupEmail").value.trim();
            let password = document.getElementById("signupPassword").value.trim();
            let confirmPass = document.getElementById("confirmPassword").value.trim();

            let emailError = document.getElementById("signupEmailError");
            let passwordError = document.getElementById("signupPasswordError");
            let confirmError = document.getElementById("confirmPasswordError");

            emailError.textContent = "";
            passwordError.textContent = "";
            confirmError.textContent = "";

            let valid = true;

            if (email === "") {
                emailError.textContent = "Email is required";
                valid = false;
            } else if (!email.includes("@") || !email.includes(".")) {
                emailError.textContent = "Enter a valid email";
                valid = false;
            }

            if (password === "") {
                passwordError.textContent = "Password is required";
                valid = false;
            } else if (password.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                valid = false;
            }

            if (confirmPass === "") {
                confirmError.textContent = "Please confirm your password";
                valid = false;
            } else if (confirmPass !== password) {
                confirmError.textContent = "Passwords do not match";
                valid = false;
            }

            if (valid) {
                alert("Signup Successful!");
                signupForm.reset();
            }
        });
    }

});
