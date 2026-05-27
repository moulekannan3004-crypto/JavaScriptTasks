const API = "https://fakestoreapi.com/products";

const container = document.getElementById("products");
const loader = document.getElementById("loader");
const errorMsg = document.getElementById("error");

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const lowHighBtn = document.getElementById("lowHigh");
const highLowBtn = document.getElementById("highLow");

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

let allProducts = [];

// Fetch Data
async function fetchProducts() {
  try {
    loader.style.display = "block";

    const res = await fetch(API);
    const data = await res.json();

    allProducts = data;
    displayProducts(data);

    loader.style.display = "none";
  } catch (error) {
    loader.style.display = "none";
    errorMsg.textContent = "Error loading data";
  }
}

// Display Products
function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}" />
      <h4>${p.title.substring(0, 20)}</h4>
      <p>${p.description.substring(0, 60)}...</p>
      <button class="price-btn">₹${p.price}</button>
      <button class="view-btn">View More</button>
    `;

    // View More
    card.querySelector(".view-btn").addEventListener("click", () => {
      openModal(p);
    });

    container.appendChild(card);
  });
}

// Search Filter
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

// Category Filter
categorySelect.addEventListener("change", () => {
  const value = categorySelect.value;

  if (value === "all") {
    displayProducts(allProducts);
  } else {
    const filtered = allProducts.filter(p => p.category === value);
    displayProducts(filtered);
  }
});

// Sorting
lowHighBtn.addEventListener("click", () => {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  displayProducts(sorted);
});

highLowBtn.addEventListener("click", () => {
  const sorted = [...allProducts].sort((a, b) => b.price - a.price);
  displayProducts(sorted);
});

// Modal
function openModal(product) {
  modal.classList.remove("hidden");

  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalImg").src = product.image;
  document.getElementById("modalDesc").textContent = product.description;
  document.getElementById("modalPrice").textContent = "₹" + product.price;
}

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Init
fetchProducts();