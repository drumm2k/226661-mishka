var modalWindow = document.querySelector(".add-to-cart");
var weekProductBtn = document.getElementById("add-to-cart");

weekProductBtn.onclick = function() {
    modalWindow.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modalWindow) {
        modalWindow.style.display = "none";
    }
}
