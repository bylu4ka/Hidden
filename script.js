document.querySelector(".hero-arrows").addEventListener("click", function () {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  const slides = document.querySelector('.slides');
  const slidesCount = document.querySelectorAll('.slide').length;
  const dotsContainer = document.querySelector('.dots');
  let index = 0;

  for (let i = 0; i < slidesCount; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }
  const dots = document.querySelectorAll('.dot');
  dots[0].classList.add('active');

  function updateCarousel() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  document.querySelector('.prev').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slidesCount - 1;
    updateCarousel();
  });

  document.querySelector('.next').addEventListener('click', () => {
    index = (index < slidesCount - 1) ? index + 1 : 0;
    updateCarousel();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      index = parseInt(e.target.dataset.index);
      updateCarousel();
    });
  });
  document.querySelector('.menu-button').addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const offset = -10;

    window.scrollTo({
      top: targetElement.offsetTop + offset,
      behavior: 'smooth'
    });
  });
});

