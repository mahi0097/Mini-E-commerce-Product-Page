let quantity = 1;
let cartCount = 0;
let cart = [];

function changeQuantity(change) {
  quantity += change;
  if (quantity < 1) quantity = 1;
  document.getElementById('quantity').textContent = quantity;
}

function addToCart() {
  const size = document.getElementById('size').value;
  const item = {
    name: "Nike Air Max 2024",
    price: 4999,
    quantity: quantity,
    size: size
  };

  cart.push(item);
  cartCount += quantity;
  document.getElementById("cart-count").textContent = cartCount;
  alert(`${quantity} item(s) added to cart!`);
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
  showCartItems();
}

function showCartItems() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>Size: ${item.size} | Qty: ${item.quantity}</p>
      <p>Total: ₹${item.price * item.quantity}</p>
      <hr />
    `;
    container.appendChild(div);
  });
}