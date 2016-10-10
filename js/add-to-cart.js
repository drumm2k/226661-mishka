var modalWindow = document.querySelector(".add-to-cart");
var weekProductBtn = document.querySelector(".add-to-cart__modal");

weekProductBtn.removeAttribute("href");

weekProductBtn.onclick = function() {
    modalWindow.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modalWindow) {
        modalWindow.style.display = "none";
    }
}
