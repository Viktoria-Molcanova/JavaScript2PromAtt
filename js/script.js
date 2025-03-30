const products = [
  { id: 1, name: 'Наушники', image: 'img/Наушники.jpg', price: 1500 },
  { id: 2, name: 'Декоративная пальма для дома', image: 'img/Пальма.jpg', price: 3000 },
  { id: 3, name: 'Фарфоровые статуэтки', image: 'img/фигурки.jpg', price: 2500 },
];

const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');
let cart = [];

function displayProducts() {
  try {
    products.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" width="300">
                        <h2>${product.name}</h2>
                        <p>Цена: ${product.price} руб.</p>
                        <button onclick="addToCart(${product.id})">Добавить в корзину</button>
                    `;
      productList.appendChild(li);
    });
  } catch (error) {
    console.error('Ошибка при отображении товаров:', error);
  }
}

function addToCart(productId) {
  try {
    const product = products.find(p => p.id === productId);
    if (!product) throw new Error('Товар не найден');
    cart.push(product);
    updateCart();
  } catch (error) {
    console.error('Ошибка при добавлении товара в корзину:', error);
  }
}

function updateCart() {
  try {
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
                      <img src="${item.image}" alt="${item.name}" width="100">  ${item.name} - ${item.price} руб. <span class="remove" onclick="removeFromCart(${index})">X</span>
                    `;
      cartList.appendChild(li);
    });
  } catch (error) {
    console.error('Ошибка при обновлении корзины:', error);
  }
}

function removeFromCart(index) {
  try {
    if (index < 0 || index >= cart.length) throw new Error('Некорректный индекс');
    cart.splice(index, 1);
    updateCart();
  } catch (error) {
    console.error('Ошибка при удалении товара из корзины:', error);
  }
}

displayProducts();
