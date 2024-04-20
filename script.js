document.addEventListener("DOMContentLoaded", function() {
    const items = [
        { name: "Potato", price: 1.5 },
        { name: "Onion", price: 2 },
        { name: "Tomato", price: 3 }
    ];

    const itemList = document.getElementById("item-list");

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");

        const nameLabel = document.createElement("label");
        nameLabel.textContent = item.name;
        div.appendChild(nameLabel);

        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = 0;
        quantityInput.value = 0;
        div.appendChild(quantityInput);

        itemList.appendChild(div);
    });

    const generateCartBtn = document.getElementById("generate-cart");
    generateCartBtn.addEventListener("click", function() {
        const cart = [];

        document.querySelectorAll(".item").forEach((itemDiv, index) => {
            const quantity = parseInt(itemDiv.querySelector("input").value);
            if (quantity > 0) {
                cart.push({
                    name: items[index].name,
                    quantity: quantity,
                    price: items[index].price
                });
            }
        });

        console.log(JSON.stringify(cart, null, 2));
        // You can send this JSON cart to a backend or use it as needed

        // Generate WhatsApp link
        const whatsappLink = document.getElementById("whatsapp-link");
        const whatsappNumber = "+919243191040"; // Change this to the desired WhatsApp number
        const message = encodeURIComponent(`Order Details:\n${formatCart(cart)}`);
        alert(message)
        whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    });

    function formatCart(cart) {
        return cart.map(item => `${item.name}: ${item.quantity}`).join("\n");
    }
});
