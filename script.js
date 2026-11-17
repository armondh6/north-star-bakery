const bakeryProducts = [
"Sourdough Bread",
"Chocolate Chip Cookies",
"Cinnamon Rolls",
"Cupcakes"
];

function saveFavorite() {
const selection = document.getElementById("favoriteProduct");
const message = document.getElementById("favoriteMessage");

if (!selection || !message) return;

const favorite = selection.value;

if (!bakeryProducts.includes(favorite)) {
message.textContent = "Please select a product.";
return;
}

localStorage.setItem("bakeryFavorite", favorite);
message.textContent = "Saved! Your favorite is " + favorite;
}

function loadFavorite() {
const saved = localStorage.getItem("bakeryFavorite");
const selection = document.getElementById("favoriteProduct");
const message = document.getElementById("favoriteMessage");

if (saved && selection && message &&
bakeryProducts.includes(saved)) {
selection.value = saved;
message.textContent = "Your saved favorite: " + saved;
}
}

document.addEventListener("DOMContentLoaded", loadFavorite);
