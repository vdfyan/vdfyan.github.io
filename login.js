document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Periksa username dan password
        if (username === "admin" && password === "admin") {
            alert("Login berhasil! Redirect ke dashboard...");
            window.location.href = "dashboard.html";
        } else {
            alert("Login gagal. Cek kembali username dan password.");
        }
    });
});