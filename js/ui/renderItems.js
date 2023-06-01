export function renderItems(productsToRender){
    const productContainer = document.querySelector(".second-container, .second-container2")
    productContainer.innerHTML= "";
    productsToRender.forEach(function(products){
        productContainer.innerHTML += `
        <a class="product" href="detail.html?id=${products.id}">
<div class="card" >
<img class="card-img-top" src = "http://localhost:1337${products.image.formats.thumbnail.url}" height="190" width="220"/>
  <div class="card-body">
    <h1 class="card-title"> ${products.title} 
        <hr> </hr> 
    </h1>
    <p class="card-text"> USD ${products.price}</p>
  </div>
</div>
</a>
        `;
    });
}

