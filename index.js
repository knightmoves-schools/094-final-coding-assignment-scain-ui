let total = 0;

function addToCart(name, price) {
    const list = document.getElementById("cart-list");

    const li = document.createElement("li");
    li.textContent = `${name} - $${price}`;
    list.appendChild(li);
   total += price;
    document.getElementById("total").textContent = total;
}
