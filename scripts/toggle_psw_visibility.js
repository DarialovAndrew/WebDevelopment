function switch_visibility() {
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    var eye = document.getElementById("togglePsw");
    if (password.type === "password") {
        password.type = "text";
        if (document.body.contains(password2)) {
            password2.type = "text";
            eye.classList.toggle('fa-eye-slash');
        } else {
            eye.classList.toggle('fa-eye-slash');
        }
    } else {
        if (document.body.contains(password2)) {
            password.type = "password";
            password2.type = "password";

        }
        password.type = "password";
        eye.classList.toggle('fa-eye-slash');
    }


}