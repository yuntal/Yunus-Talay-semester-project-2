import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { getExistingItem } from "./utils/favFunctions.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id){
    document.location.href ="/";
}

const productUrl = baseUrl + "products/" + id;

console.log(productUrl);

(async function(){

    try{
        const response = await fetch(productUrl);
        const details = await response.json();
    
        document.title = details.title;
    
        const container = document.querySelector(".detail-container");

        const items = getExistingItem();


        items.forEach((details) => {
        
            const doesItemExist = items.find(function(fav){
                return  fav.id === details.id;
            });
        
            console.log(doesItemExist);
        })

        container.innerHTML = `
        <div>
        <img class="detail-image" src = "http://localhost:1337${details.image.formats.large.url}" width="100%"/>
        <h1>${details.title}</h1>
        <h2> USD ${details.price}</h2>
        <p> ${details.description} </p>
        <button class="add-button" data-id="${details.id}" data-title ="${details.title}" data-price = "${details.price}" data-image ="${details.image.formats.thumbnail.url}">Add to bag</i> 
        </div> `;
    }
        catch(error) {
        displayMessage ("error", error, ".detail-container");
    }

    const favButton = document.querySelectorAll (".add-button");

    favButton.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    function handleClick(){

        const id = this.dataset.id;
        const title = this.dataset.title;
        const price = this.dataset.price;
        const image = this.dataset.image;

       const currentItem = getExistingItem();

       const productExists = currentItem.find(function(fav){
       return fav.id === id;
       });

       if (!productExists){
        const product = {id: id, title: title, price: price, image: image};
       
        currentItem.push(product);
 
        saveItems(currentItem);
       }

       else{
           const newItem = currentItem.filter(fav => fav.id!== id);
           saveItems(newItem);
       }
    }
    

    function saveItems(favs){
        localStorage.setItem("items", JSON.stringify(favs));
    }

})();

