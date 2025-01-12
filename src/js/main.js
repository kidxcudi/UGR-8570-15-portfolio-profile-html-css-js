const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')
const dots = document.querySelectorAll(".dot");
const carouselContainer = document.querySelector(".carousel-container");
const dots1 = document.querySelectorAll(".dot1");
const carouselContainer1 = document.querySelector(".carousel-container1");
const container = document.querySelector('.skill_cards');
const prevButton = document.querySelector('.caro-control.prev');
const nextButton = document.querySelector('.caro-control.next');

menu.addEventListener('click', () => {
     nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})


// dot carousel
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");

    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
  });
});

// dot carousel1
dots1.forEach((dot1, index) => {
  dot1.addEventListener("click", () => {
    dots1.forEach(d => d.classList.remove("active"));
    dot1.classList.add("active");

    carouselContainer1.style.transform = `translateX(-${index * 100}%)`;
  });
});

window.addEventListener("resize", () => {
  dots.forEach(d => d.classList.remove("active"));
  if (dots[0]) dots[0].classList.add("active");
  carouselContainer.style.transform = `translateX(0%)`;

  dots1.forEach(d => d.classList.remove("active"));
  if (dots1[0]) dots1[0].classList.add("active");
  carouselContainer1.style.transform = `translateX(0%)`;
});

window.addEventListener("resize", () => {
    currentIndex = 0;
    updateCarousel();
});

// arrow carousel
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100; 
  container.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + container.children.length) % container.children.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % container.children.length;
  updateCarousel();
});

// Redirect to contact page with email query
function redirectToContact() {
  const emailInput = document.getElementById("emailRedirect").value;

  if (emailInput && !/\S+@\S+\.\S+/.test(emailInput)) {
    alert("Please enter a valid email address.");
    return;
  }

  const contactPageURL = `/UGR-8570-15-portfolio-profile-html-css-js/src/contact_me.html${emailInput ? `?email=${encodeURIComponent(emailInput)}` : ''}`;
  window.location.href = contactPageURL;
}

// Autofill email on contact page
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const email = urlParams.get("email");
  if (email) {
    const emailInput = document.getElementById("contactEmail");
    if (emailInput) {
      emailInput.value = email;
    } else {
      console.error("Element with id 'contactEmail' not found!");
    }
  }
});




