const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

if (!productId) {
  throw new Error("Invalid product ID");
}

const product = products.find(p => p.id === productId);

if (!product) {
  throw new Error("Product not found");
}


document.getElementById("productName").textContent = product.name;
document.getElementById("productPrice").textContent = `₹${product.price}`;
document.getElementById("productDescription").textContent = product.description;
document.getElementById("breadcrumbName").textContent = product.name;


const mainImage = document.getElementById("mainImage");
const thumbContainer = document.getElementById("thumbnailImages");


mainImage.src = product.img;


thumbContainer.innerHTML = "";
const t = document.createElement("img");
t.src = product.img;
t.onclick = () => mainImage.src = product.img;
thumbContainer.appendChild(t);





const fullStars = Math.floor(product.rating);
const hasHalfStar = product.rating % 1 >= 0.5;

document.getElementById("productRating").innerHTML = `
  <span class="stars">
    ${"★".repeat(fullStars)}
    ${hasHalfStar ? "<span class='half'>★</span>" : ""}
  </span>
  <span class="rating-value">(${product.rating})</span>
`;


let cartCount = localStorage.getItem("cartCount")
  ? parseInt(localStorage.getItem("cartCount"))
  : 0;

document.getElementById("cart-count").innerText = cartCount;


document.getElementById("addToCart").addEventListener("click", () => {
  cartCount++;
  localStorage.setItem("cartCount", cartCount);
  document.getElementById("cart-count").innerText = cartCount;
});


["penDetails", "pencilDetails", "notebookDetails", "journalDetails"]
  .forEach(id => document.getElementById(id).style.display = "none");

if (product.category === "Pen")
  document.getElementById("penDetails").style.display = "block";

if (product.category === "Pencil")
  document.getElementById("pencilDetails").style.display = "block";

if (product.category === "Notebook")
  document.getElementById("notebookDetails").style.display = "block";

if (product.category === "Journal")
  document.getElementById("journalDetails").style.display = "block";

document.getElementById("buyNow").addEventListener("click", () => {
  window.location.href = "order.html";
});
