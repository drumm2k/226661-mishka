var addToCart = document.querySelector('.add-to-cart');
var orderButton = document.querySelector('.week-product__order');


orderButton.addEventListener('click', function() {
  if (addToCart.classList.contains('add-to-cart--open')) {
    navMain.classList.remove('add-to-cart--open');
  } else {
    navMain.classList.add('add-to-cart--open');
  }
});
