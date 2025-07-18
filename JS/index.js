// Aos
AOS.init();

// Swiper 
const swiper = new Swiper(".checkout-swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    575: { slidesPerView: 2, spaceBetween: 25 },
    1024: { slidesPerView: 3,spaceBetween:30 },
  },
});

// Testimonial Section
const testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // speed: 800,
  // autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  // },
});


const SPEED = 200; // smaller = faster (affects step size)
// Counting
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const targetK = +counter.dataset.target; // value in thousands (e.g., 15)

      const update = () => {
        // Extract numeric part (strip non‑digits) and default to 0
        const displayedK = +counter.innerText.replace(/\D/g, "") || 0;
        const step = Math.ceil(targetK / SPEED); // increment in thousands

        if (displayedK < targetK) {
          counter.innerText = displayedK + step + "+";
          requestAnimationFrame(update);
        } else {
          counter.innerText = targetK + "+"; // lock final value
          io.unobserve(counter); // stop watching
        }
      };

      update();
    });
  },
  { threshold: 0.15 } // start when ~15 % visible
);

// Observe every counter element on the page
document.querySelectorAll(".counter").forEach((el) => io.observe(el));

// Questions Form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });
