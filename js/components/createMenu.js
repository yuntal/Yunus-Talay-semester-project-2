
import {getUserName} from "../utils/storage.js"; 
import logOut from "./common/logoutButton.js";

export default function createMenu() {
    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUserName();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Sign in</a>`;

    if (username) {
        authLink = `<a class ="logout">Sign out ${username}</a>`;
    }

    console.log(username);

    container.innerHTML = `<div class="menu">
                                <a href="/" class="${pathname === "/" ? "active" : ""}">Home</a>
                                ${authLink}
                        </div>`;
  logOut();
}