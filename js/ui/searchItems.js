import { renderItems } from "./renderItems.js";

export function searchItems(products) {
    const search = document.querySelector("#search");

    search.onkeyup = function (event) {

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredItems = products.filter(function (product) {
            if (product.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderItems(filteredItems);
    };
}
