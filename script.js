let cartCount = 0;

document.querySelector('.add-to-cart').addEventListener('click', () => {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
});
