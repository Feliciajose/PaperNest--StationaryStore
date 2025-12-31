document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("productGrid");
    const countEl = document.getElementById("product-count");
    const gridView = document.getElementById("gridView");
    const listView = document.getElementById("listView");
    const filterToggle = document.getElementById("filterToggle");
    const filtersPanel = document.getElementById("filters");
    const sortBy = document.getElementById("sortBy");
    const filters = document.getElementById("filters");


    if (!grid || !countEl) {
        console.error("Required DOM elements not found");
        return;
    }
    function renderProducts(list) {
        grid.innerHTML = "";
        countEl.textContent = list.length;

        list.forEach(p => {
            grid.innerHTML += `
        <div class="product-card" onclick="openProduct('${p.id}')">
          <div class="product-image">
            <img src="${p.img}" alt="${p.name}">
            <div class="product-actions">
              <span title="Add to Cart" onclick="event.stopPropagation()">🛒</span>
              <span title="Wishlist" onclick="event.stopPropagation()">🤍</span>
              <span title="View" onclick="event.stopPropagation()">👁</span>
            </div>
          </div>
          <h3>${p.name}</h3>
          <p class="price">₹${p.price}</p>
           <div class="product-rating">
        <span class="stars">★★★★★</span>
        <span class="reviews">${p.rating} Ratings</span>
      </div>

        </div>
      `;
        });
    }

    renderProducts(products);

    document.querySelectorAll(".filters input").forEach(input => {
        input.addEventListener("change", applyFilters);
    });

   function applyFilters() {
  const checked = [...document.querySelectorAll(".filters input:checked")];

  const categories = checked
    .filter(c => ["Pen", "Pencil", "Journal", "Notebook", "Coming"].includes(c.value))
    .map(c => c.value);

  const types = checked
    .filter(c => ["Single", "Multi"].includes(c.value))
    .map(c => c.value);

  const ratings = checked
    .filter(c => !isNaN(c.value))
    .map(c => Number(c.value));

  filteredProducts = products.filter(p => {
    const matchCategory =
      categories.length === 0 || categories.includes(p.category);

    const matchType =
      types.length === 0 || types.includes(p.type);

    const matchRating =
      ratings.length === 0 || ratings.some(r => p.rating >= r);

    return matchCategory && matchType && matchRating;
  });

  renderProducts(filteredProducts);
}

    if (sortBy) {
        sortBy.addEventListener("change", e => {
            const val = e.target.value;

            if (val === "az")
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            if (val === "priceLow")
                filteredProducts.sort((a, b) => a.price - b.price);
            if (val === "priceHigh")
                filteredProducts.sort((a, b) => b.price - a.price);

            renderProducts(filteredProducts);
        });
    }

    if (gridView && listView) {
        gridView.onclick = () => {
            grid.classList.remove("list");
            gridView.classList.add("active");
            listView.classList.remove("active");
        };

        listView.onclick = () => {
            grid.classList.add("list");
            listView.classList.add("active");
            gridView.classList.remove("active");
        };
    }

    if (filterToggle && filtersPanel) {
        filterToggle.addEventListener("click", () => {
            filtersPanel.classList.toggle("show");
        });
    }

});
function openProduct(id) {
  window.location.href = `productdetail.html?id=${id}`;
}

const count = localStorage.getItem("cartCount") || 0;
document.getElementById("cart-count").innerText = count;
const storyLines = [
    "Built on creativity and care.",
    "Where ideas begin on paper.",
    "Inspired by everyday moments."
];

const collectionLines = [
    "Thoughtfully crafted stationery.",
    "Designed for creative minds.",
    "Paper that feels just right."
];

document.querySelectorAll(".extra-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        const textEl = card.querySelector("p");
        const type = card.dataset.type;

        const lines = type === "story" ? storyLines : collectionLines;
        const randomLine = lines[Math.floor(Math.random() * lines.length)];

        textEl.textContent = randomLine;
    });
});

function goToProducts() {
    window.location.href = "product.html";
}