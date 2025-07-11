const swiper = new Swiper(".checkout-swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    575: { slidesPerView: 2, spaceBetween: 25 },
    1024: { slidesPerView: 3 },
  },
});

// Autoplay Swiper
const popularSwiper = new Swiper(".popular-swiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 4 },
    960: { slidesPerView: 6 },
    1280: { slidesPerView: 7 },
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
