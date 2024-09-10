function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email != "" && password != "") {
        if (email === "mtsguilherme991@gmail.com" && password === "1234567") {
            window.location.href = "menu/index.html";
        } else {
            alert("Usuario e/ou senha incorretos");
        }
    } else {
        return;
    }
}

function showPassword() {
    const x = document.getElementById("password").type;
    const s = document.getElementById("view").textContent;
    if (s === "Mostrar") {
        document.getElementById("view").textContent = "Ocultar";
    } else {
        document.getElementById("view").textContent = "Mostrar";
    }
    if (x === "password") {
        document.getElementById('password').type = 'text';
    } else {
        document.getElementById('password').type = 'password';
    }
}