function login(email, password) {
    if (email === "admin@gmail.com" && password === "admin") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your email and password.");
    }
}