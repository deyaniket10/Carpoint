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
function updatePrice(value) {
    document.getElementById('priceOutput').innerText = '₹' + value;
}

function clearAll() {
    document.querySelectorAll('.form-check-input').forEach(el => el.checked = false);
    document.getElementById('priceRange').value = 1000;
    updatePrice(1000);
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

// const openBtn = document.getElementById('openFilterBtn');
// const closeBtn = document.getElementById('closeFilterBtn');
// const filterModal = document.getElementById('filterModal');

// openBtn.addEventListener('click', () => {
//     filterModal.style.display = 'block';
// });

// closeBtn.addEventListener('click', () => {
//     filterModal.style.display = 'none';
// });

// // Optional: Close modal when clicking outside
// window.addEventListener('click', (e) => {
//     if (e.target === filterModal) {
//         filterModal.style.display = 'none';
//     }
// });

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