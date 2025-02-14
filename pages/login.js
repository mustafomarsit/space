let logoutBtn = document.querySelector(".logoutBtn");

logoutBtn.addEventListener("click", logout);

function logout() {
    window.location.replace("../index.html");
}