export function getExistingItem(){
    const favs = localStorage.getItem("items");

    console.log(favs);

    if(!favs){
        return [];
    }
    else {
        return JSON.parse (favs);
    }
 }