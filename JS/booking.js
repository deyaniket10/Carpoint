// Header Section
const menu = document.querySelector(".ham")
console.log(menu)
const nav = document.querySelector(".nav-collapse")
console.log(nav)
menu.addEventListener("click", () => {
    console.log("event triggered");
    nav.classList.toggle("active");


})

// right box of cart section
function updatePrice(value) {
    document.getElementById('priceOutput').innerText = '₹' + value;
}

function clearAll() {
    document.querySelectorAll('.form-check-input').forEach(el => el.checked = false);
    document.getElementById('priceRange').value = 1000;
    updatePrice(1000);
}