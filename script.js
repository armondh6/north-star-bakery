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
function validateContactForm(event) {
event.preventDefault();

const name = document.getElementById("customer-name");
const email = document.getElementById("customer-email");
const request = document.getElementById("request-type");
const details = document.getElementById("item-details");
const message = document.getElementById("formMessage");

if (!name || !email || !request || !details || !message) {
return;
}

const errors = [];

if (name.value.trim().length < 2) {
errors.push("Please enter your full name.");
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email.value.trim())) {
errors.push("Please enter a valid email address.");
}

if (request.value === "") {
errors.push("Please select a request type.");
}

if (details.value.trim().length < 5) {
errors.push("Please enter at least 5 characters for item details.");
}

if (errors.length > 0) {
message.textContent = errors.join(" ");
message.style.color = "red";
} else {
message.textContent =
"Your information is valid! Your request is ready for review.";
message.style.color = "green";
}
}

document.addEventListener("DOMContentLoaded", function () {
const form = document.querySelector("form");

if (form) {
form.setAttribute("novalidate", "");
form.addEventListener("submit", validateContactForm);
}
});
