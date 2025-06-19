let total = 0;
let cart = [];
let prices = [];



function addToCart(price, item){
    total += price;
    document.getElementById('total').textContent = total;
    cart.push(item);
    prices.push(price);
    updateCartDisplay();
}

function updateCartDisplay(){
const cartList =document.getElementById('cart-items');
cartList.innerHTML = ''; 
let uniqueItems = [...new Set(cart)];
for (let i = 0; i < uniqueItems.length; i++){


let count = cart.filter(name => name === uniqueItems[i]).length;
let listItem = document.createElement('li');
listItem.innerHTML = `${uniqueItems[i]} x${count};<button
onclick= "removeFromCart('${uniqueItems[i]}')">-</button>`;
cartList.appendChild(listItem);
}
}

function removeFromCart(item){
    let index = cart.indexOf(item);
    if(index !== -1){
    total -= prices[index];
    document.getElementById('total').textContent = total;
    cart.splice(index, 1);
    prices.splice(index, 1);
    updateCartDisplay();
}
}