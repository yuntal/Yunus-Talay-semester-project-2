import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { renderItems } from "./ui/renderItems.js";
import { searchItems } from "./ui/searchItems.js";

const productsUrl = baseUrl + "products" ;

(async function() {
const container = document.querySelector(".second-container");

try {
  const response = await fetch(productsUrl);
  const json = await response.json();

  const product = json;

  
  container.innerHTML = "";


  product.forEach(function(product){
      container.innerHTML += `<a class="product" href="detail.html?id=${product.id}">
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
    console.log(error);
    displayMessage ("error", error, ".second-container");
}



})();
