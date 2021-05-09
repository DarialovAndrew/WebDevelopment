function switch_visibility() {
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    var eye = document.getElementById("togglePsw");
    if (password.type === "password") {
        password.type = "text";
        if (password2 != null) {
            password2.type = "text";
            eye.classList.toggle('fa-eye-slash');
        } else {
            eye.classList.toggle('fa-eye-slash');
        }
    } else {
        if (password2 != null) {
            password.type = "password";
            password2.type = "password";
            eye.classList.toggle('fa-eye-slash');
        }
        password.type = "password";
        eye.classList.toggle('fa-eye-slash');
    }


}