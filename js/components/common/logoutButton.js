import { getStorage } from "../../utils/storage.js";

export default function logOut() {
    const button = document.querySelector(".logout");

    if (button) {
        button.onclick = function () {
            const doLogout = confirm("Are you sure?");

            if (doLogout) {
                getStorage();
                location.href = "/login.html";
            }
        };
    }
}