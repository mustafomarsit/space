let IdInput = document.querySelector(".idInput");
let passInput = document.querySelector(".passInput");
let loginBtn = document.querySelector(".loginBtn");
let errorP = document.querySelector(".errorP");
let darkBtn = document.querySelector(".darkBtn");
let body = document.body;

// Dark Mode holatini saqlash uchun localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkBtn.textContent = "Light Mode";
}

loginBtn.addEventListener("click", login);

function login(event) {
    event.preventDefault();

    let id = Number(IdInput.value);
    let pass = Number(passInput.value);

    if (id === 408077 && pass === 234567) {
        window.location.replace("./pages/login.html");
    } else {
        errorP.textContent = "Id yoki parol xato";
    }

    IdInput.value = "";
    passInput.value = "";
}

// Dark Mode Toggle
darkBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Sahifani qayta yuklashni oldini oladi

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        darkBtn.textContent = "Dark Mode";
        localStorage.setItem("darkMode", "disabled");
    } else {
        body.classList.add("dark-mode");
        darkBtn.textContent = "Light Mode";
        localStorage.setItem("darkMode", "enabled");
    }
});
