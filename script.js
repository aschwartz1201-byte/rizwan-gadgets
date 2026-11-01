let cart = [];

const whatsappNumber = "923XXXXXXXXX";

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".product-card");

        const name = card.querySelector("h3").textContent;
        const price = card.querySelector(".price").textContent;

        cart.push({ name, price });

        alert(name + " added to your cart!");
    });
});

function orderOnWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello RIZWAN GADGETS! I want to order:\n\n";

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.price}\n`;
    });

    message += "\nPlease confirm my order.";

    const url = "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

