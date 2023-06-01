const tokenKey = "token";
const userKey = "user";

export function saveToken(token){
    saveToStorage(tokenKey, token);
}

export function getToken() {
    getFromStorage(tokenKey);
}

export function saveUser(user){
    saveToStorage(userKey, user);
}

export function getUserName () {
    const user = getFromStorage(userKey);

    if(user){
        return user.username;
    }
    return null;
}

export function getStorage(){
    localStorage.removeItem(userKey);
}

function saveToStorage (key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key){
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }
    return JSON.parse(value);
}