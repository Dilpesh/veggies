document.addEventListener("DOMContentLoaded", function() {
    const items = [
        { name: "Potato (kg)", price: 1.5 },
        { name: "Onion (kg)", price: 2 },
        { name: "Tomato (kg)", price: 3 },
        { name: "Tori (pc)", price: 1.8 },
        { name: "Loki (pc)", price: 2.5 },
        { name: "Palak", price: 1.2 },
        { name: "Methi", price: 1.3 },
        { name: "Kheera (pc)", price: 2.3 },
        { name: "Beetroot (pc)", price: 1.7 },
        { name: "Beans (gm)", price: 2.2 },
        { name: "chiku (pc)", price: 2.2 },
        { name: "cabbage (pc)", price: 2.2 },
        { name: "grapes (gm)", price: 2.2 },
        { name: "ginger (gm)", price: 2.2 },
        { name: "garlic (pc)", price: 2.2 },
        { name: "bhindi (gm)", price: 2.2 },
        { name: "big banana (pc)", price: 2.2 },
        { name: "shimla mirch (pc)", price: 2.2 },
        { name: "shimla apple (pc)", price: 2.2 },
        { name: "local carrot (gm)", price: 2.2 },
        { name: "green chilli (gm)", price: 2.2 },
        { name: "muskmelon (pc)", price: 2.2 },
        { name: "karela (gm)", price: 2.2 }
    ];

    const itemList = document.getElementById("item-list");

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");

        const nameLabel = document.createElement("label");
        nameLabel.textContent = item.name;
        div.appendChild(nameLabel);
        
        const quantityContainer = document.createElement("div");
        quantityContainer.classList.add("quantity-container");

        const decreaseBtn = document.createElement("button");
        decreaseBtn.textContent = "-";
        decreaseBtn.addEventListener("click", function() {
            const quantityInput = quantityContainer.querySelector("input");
            let quantity = parseInt(quantityInput.value);
            quantity = quantity > 0 ? quantity - 1 : 0;
            quantityInput.value = quantity;
        });
        quantityContainer.appendChild(decreaseBtn);

        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = 0;
        quantityInput.value = 0;
        quantityContainer.appendChild(quantityInput);
       
        const increaseBtn = document.createElement("button");
        increaseBtn.textContent = "+";
        increaseBtn.addEventListener("click", function() {
            const quantityInput = quantityContainer.querySelector("input");
            let quantity = parseInt(quantityInput.value);
            quantityInput.value = quantity + 1;
        });
        quantityContainer.appendChild(increaseBtn);

        div.appendChild(quantityContainer);
        itemList.appendChild(div);
    });

    const placeOrderBtn = document.getElementById("place-order");
    placeOrderBtn.addEventListener("click", function() {
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

        // Generate WhatsApp link and open chat
        const whatsappNumber = "+919243191040"; // Change this to the desired WhatsApp number
        const message = encodeURIComponent(`Order Details:\n${formatCart(cart)}`);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappLink, "_blank");
    });

    function formatCart(cart) {
        return cart.map(item => `${item.name}: ${item.quantity}`).join("\n");
    }
});
