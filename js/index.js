import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { renderItems } from "./ui/renderItems.js";
import { searchItems } from "./ui/searchItems.js";

const homeUrl = baseUrl + "home";

(async function(){

    try{
        const response = await fetch(homeUrl);
        const details = await response.json();
    
    
        const container = document.querySelector(".container-fluid");

 
        container.innerHTML = `
        <div>
        <img class="home-image" src = "http://localhost:1337${details.hero_banner.formats.large.url}" width="100%"/>
        </div>`;
    }
        catch(error) {
        displayMessage ("error", error, ".container-fluid");
    }

})();


const productsUrl = baseUrl + "products?_limit=4";

(async function(){

const containers = document.querySelector(".second-container2")

    try{
        const response = await fetch(productsUrl);
        const json = await response.json();

        const product = json;
    
    
        containers.innerHTML = "";


        product.forEach(function(product){
            containers.innerHTML += `<a class="product" href="detail.html?id=${product.id}">
            <img class="product-image" src = "http://localhost:1337${product.image.formats.thumbnail.url}" height="190" width="220"/>
                                    <h1> ${product.title} </h1>
                                    <h2> ${product.price}</h2>  
                                    </a>`;
        });
        async function getItems(){
            renderItems (product);
            searchItems (product);
          }
          getItems();
    }
        catch(error) {
        displayMessage ("error", error, ".second-container2");
    }

})();