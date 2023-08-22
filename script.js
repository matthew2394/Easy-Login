document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginStatus = document.getElementById("login-status");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Tutaj możesz dodać swoją logikę autoryzacji, np. porównując dane zapisane w bazie danych.
        // W tym przykładzie zakładam, że prawidłowe dane to "username: admin" i "password: admin123".

        if (username === "admin" && password === "admin123") {
            // Przekierowanie po zalogowaniu
            window.location.href = "dashboard.html"; // sciezka pliku
        } else {
            loginStatus.textContent = "Logowanie się nie powiodło! Spróbuj ponownie";
        }
    });
});
