let IdInput = document.querySelector(".idInput");
let passInput = document.querySelector(".passInput");
let loginBtn = document.querySelector(".loginBtn");
let errorP = document.querySelector(".errorP");

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
