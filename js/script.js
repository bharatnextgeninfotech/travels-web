// ===Navbar section===
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("menu-open");
});

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});
sr.reveal(".hero-text", { delay: 200, origin: "top" });
sr.reveal(".hero-img", { delay: 450, origin: "top" });
sr.reveal(".icons", { delay: 500, origin: "left" });
sr.reveal(".scroll-down", { delay: 500, origin: "right" });

const images = document.querySelectorAll(".hero-img img");
let currentImageIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    image.classList.toggle("active", i === index);
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

// Set an interval for automatic sliding (change image every 5 seconds)
setInterval(nextImage, 3000);

// booking section
const filterLinks = document.querySelectorAll(".sidebar a");
const carCards = document.querySelectorAll(".car-card");

filterLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = e.target.getAttribute("data-filter");
        carCards.forEach(card => {
            card.style.display = "none";
            if (card.classList.contains(filter) || filter === "all") {
                card.style.display = "flex";
            }
        });
    });
});
