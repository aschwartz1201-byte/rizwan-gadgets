
// RIZWAN GADGETS - SHOPPING CART

let cart = [];

// Add your WhatsApp number later.
// Format: 923XXXXXXXXX
const whatsappNumber = "923362403922";

// ADD PRODUCTS TO CART
document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", function () {

        const name = this.dataset.name;
        const price = Number(this.dataset.price);

        const existingProduct = cart.find(item => item.name === name);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        updateCart();

        alert(name + " added to your cart!");
    });

});

// UPDATE CART DISPLAY
function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach((item, index) => {

        total += item.price * item.quantity;
        count += item.quantity;

        const product = document.createElement("div");
        product.className = "cart-item";

        product.innerHTML = `
            <span>${item.name}</span>
            <span>Rs. ${item.price} × ${item.quantity}</span>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.appendChild(product);

    });

    cartCount.textContent = count;
    cartTotal.textContent = total;
}

// REMOVE PRODUCT
function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

// CLEAR CART
function clearCart() {

    cart = [];

    updateCart();
}

// WHATSAPP ORDER
function orderOnWhatsApp() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    if (whatsappNumber === "923XXXXXXXXX") {
        alert("Please configure your WhatsApp number in script.js first.");
        return;
    }

    let message = "Hello RIZWAN GADGETS!\n";
    message += "I would like to place an order:\n\n";

    let total = 0;

    cart.forEach((item, index) => {

        const subtotal = item.price * item.quantity;

        message += `${index + 1}. ${item.name}\n`;
        message += `Quantity: ${item.quantity}\n`;
        message += `Price: Rs. ${subtotal}\n\n`;

        total += subtotal;
    });

    message += "TOTAL: Rs. " + total;
    message += "\n\nPlease confirm my order.";

    const url =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

// INITIAL CART DISPLAY
updateCart();

s