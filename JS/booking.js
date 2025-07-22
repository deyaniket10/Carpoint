AOS.init();

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
function updatePrice(input) {
    const value = input.value;
    const formattedValue = Number(value).toLocaleString('en-IN');
    document.getElementById('priceOutput2').innerText = '₹' + formattedValue;
}


function clearAll() {
    document.querySelectorAll('.form-check-input').forEach(el => el.checked = false);
    document.getElementById('priceRange').value = 1000;
    updatePrice(5000);
}

// for mobile 


const mobile = document.querySelector(".mobile")
console.log(mobile)
const items = document.querySelector(".mobile-items")
console.log(items)
mobile.addEventListener("click", () => {
    console.log("event triggered");
    items.classList.toggle("active");
})



// For heart Section
function toggleHeart(element) {
    const icon = element.querySelector('i');

    if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        element.classList.add('active');
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        element.classList.remove('active');
    }
}

// input field
function formatDate() {
    const input = document.getElementById('inputField');
    const date = new Date(input.value);
    if (isNaN(date)) return;

    const days = String(date.getDate()).padStart(2, '0');
    const months = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = String(date.getFullYear()).slice(2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const weekday = date.toLocaleString('en-US', { weekday: 'short' });

    // Proper backticks for template-literal
    const finalFormat = `${days} ${months}'${year},${hours}:${minutes} ${weekday}`;
    document.getElementById('formattedText').textContent = finalFormat;
}

document.getElementById('submitBtn').addEventListener('click', formatDate);