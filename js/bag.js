import { getExistingItem } from "./utils/favFunctions.js";

const product = getExistingItem();

const container = document.querySelector(".second-container");

if (product.length === 0){
    container.innerHTML = `<div class = "empty"> Your bag is empty</div>`;
}

product.forEach(product => {
    container.innerHTML += `   <a class="product" href="detail.html?id=${product.id}">
    <div class="card" >
    <img class="card-img-top" src = "http://localhost:1337${product.image}" height="190" width="220"/>
      <div class="card-body">
        <h5 class="card-title"> ${product.title} 
            <hr> </hr> 
        </h5>
        <p class="card-text"> USD ${product.price}</p>
      </div>
    </div>
    </a> `
  });




     