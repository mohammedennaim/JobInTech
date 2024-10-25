const user = document.getElementById("user");
const profil = document.getElementById("profil");
const notification = document.getElementById("notification");
const local = document.getElementById("local");
const logo = document.getElementById("logo");
const list = document.getElementById("list");

user.addEventListener('click', () => {
    if (profil.style.display === "flex") {
        profil.style.display = "none";
        notification.style.visibility = "visible";
        local.style.visibility ="visible";
        list.style.top ="0";
        logo.style.top = "0";
        user.style.top = "0";

    } else {
        profil.style.display = "flex";
        notification.style.visibility = "hidden";
        local.style.visibility ="hidden";
        list.style.top ="-58px";
        logo.style.top = "-57.7px";
        user.style.top = "7px";
    }
});