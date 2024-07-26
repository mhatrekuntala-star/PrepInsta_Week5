let cart = [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach((product, index) => {
        const item = document.createElement('li');
        item.innerHTML = `${product.name} - $${product.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(item);
        total += product.price;
    });

    document.getElementById('cart-total').innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    renderCart();
}
