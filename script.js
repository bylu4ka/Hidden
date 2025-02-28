document.querySelector(".hero-arrows").addEventListener("click", function () {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navBar = document.querySelector(".nav-bar");

  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    navBar.classList.toggle("active");
  });

  // Закриття меню при кліку поза ним (необов'язково)
  document.addEventListener("click", function (event) {
    if (!navBar.contains(event.target) && !burgerMenu.contains(event.target)) {
      navBar.classList.remove("active");
      burgerMenu.classList.remove("active");
    }
  });
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

document.querySelectorAll('.menu-button').forEach(button => {
  button.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    // Перевіряємо, чи це внутрішнє посилання (починається з #)
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      const offset = 20;

      if (targetElement) {
        const targetPosition = targetElement.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});


// Додавання функціоналу для перемикання мови
const languageSelect = document.getElementById("lang-select");
const translateElements = document.querySelectorAll("[data-translate]");

languageSelect.addEventListener("change", function () {
  const lang = this.value;

  translateElements.forEach(element => {
    const translationKey = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][translationKey]) {
      element.textContent = translations[lang][translationKey];
    }
  });
});

const translations = {
  uk: {
    "afisha": "Афіша",
    "banket": "Банкети",
    "menu": "Меню",
    "delivery": "Доставка",
    "gallery": "Галерея",
    "contacts": "Контакти",
    "mafia-slide": "Мафія – випробуй свої навички детектива",
    "tasting-slide": "Дегустація вин – відкрий для себе нові смаки",
    "movie-slide": "Кіно-вечір – атмосферний перегляд у затишній компанії",
    "banquet-menu": "Маємо банкетне та фуршетне меню, багатий вибір напоїв на барі",
    "birthday-discount": "А на день народження даруємо знижку 15%",
    "closed-event": "Хочете влаштувати закрите свято? Легко!",
    "closed-facility": "Ми можемо закрити весь заклад під вас.",
    "custom-requests": "Ми можемо втілити будь-яке ваше побажання! Чекаємо на вас!",
    "delivery-title": "Доставка смаку до твоїх дверей!",
    "free-delivery": "Безкоштовна доставка на замовлення від 1000грн",
    "phone1": "+38 (093) 001 22 22",
    "address-header": "Адреса",
    "address-1": "Hidden 1",
    "address-2": "Січових стрільців 22",
    "telegram-label": "Наш Telegram Hidden:",
    "telegram-link": "Telegram",
    "instagram-label": "Наш Instagram:",
    "instagram-link": "hidden.rest",
    "hours-header": "Графік",
    "hours-weekday": "Пн-Чт: 10:00 - 22:00",
    "hours-weekend": "Пт-Нд: 10:00 - 23:00",
    "phone2": "+38 (073) 005 55 53",
    "address-header2": "Адреса",
    "address-1-2": "Hidden 2.0",
    "address-2-2": "Жилянська 55",
    "telegram-label2": "Наш Telegram Hidden 2.0:",
    "telegram-link2": "Telegram"
  },
  ru: {
    "afisha": "Афиша",
    "banket": "Банкеты",
    "menu": "Меню",
    "delivery": "Доставка",
    "gallery": "Галерея",
    "contacts": "Контакты",
    "mafia-slide": "Мафия – попробуй свои навыки детектива",
    "tasting-slide": "Дегустация вин – открой для себя новые вкусы",
    "movie-slide": "Кино-вечер – атмосферный просмотр в уютной компании",
    "banquet-menu": "У нас есть банкетное и фуршетное меню, богатый выбор напитков на баре",
    "birthday-discount": "На день рождения дарим скидку 15%",
    "closed-event": "Хотите устроить закрытое торжество? Легко!",
    "closed-facility": "Мы можем закрыть весь ресторан для вас.",
    "custom-requests": "Мы можем выполнить любое ваше пожелание! Ждем вас!",
    "delivery-title": "Доставка вкуса прямо к вашим дверям!",
    "free-delivery": "Бесплатная доставка при заказе от 1000грн",
    "phone1": "+38 (093) 001 22 22",
    "address-header": "Адрес",
    "address-1": "Hidden 1",
    "address-2": "Сечевых стрельцов 22",
    "telegram-label": "Наш Telegram Hidden:",
    "telegram-link": "Telegram",
    "instagram-label": "Наш Instagram:",
    "instagram-link": "hidden.rest",
    "hours-header": "График",
    "hours-weekday": "Пн-Чт: 10:00 - 22:00",
    "hours-weekend": "Пт-Нд: 10:00 - 23:00",
    "phone2": "+38 (073) 005 55 53",
    "address-header2": "Адрес",
    "address-1-2": "Hidden 2.0",
    "address-2-2": "Жилянская 55",
    "telegram-label2": "Наш Telegram Hidden 2.0:",
    "telegram-link2": "Telegram"
  },
  en: {
    "afisha": "Schedule",
    "banket": "Banquets",
    "menu": "Menu",
    "delivery": "Delivery",
    "gallery": "Gallery",
    "contacts": "Contacts",
    "mafia-slide": "Mafia – test your detective skills",
    "tasting-slide": "Wine tasting – discover new flavors",
    "movie-slide": "Movie night – atmospheric viewing in cozy company",
    "banquet-menu": "We have banquet and buffet menus, a wide selection of drinks at the bar",
    "birthday-discount": "We offer a 15% discount for birthdays",
    "closed-event": "Want to host a private event? Easy!",
    "closed-facility": "We can close the entire venue for you.",
    "custom-requests": "We can fulfill any of your requests! We are waiting for you!",
    "delivery-title": "Taste delivery to your door!",
    "free-delivery": "Free delivery for orders over 1000 UAH",
    "phone1": "+38 (093) 001 22 22",
    "address-header": "Address",
    "address-1": "Hidden 1",
    "address-2": "Sichovyh Striltsiv 22",
    "telegram-label": "Our Telegram Hidden:",
    "telegram-link": "Telegram",
    "instagram-label": "Our Instagram:",
    "instagram-link": "hidden.rest",
    "hours-header": "Hours",
    "hours-weekday": "Mon-Thu: 10:00 - 22:00",
    "hours-weekend": "Fri-Sun: 10:00 - 23:00",
    "phone2": "+38 (073) 005 55 53",
    "address-header2": "Address",
    "address-1-2": "Hidden 2.0",
    "address-2-2": "Zhylyanska 55",
    "telegram-label2": "Our Telegram Hidden 2.0:",
    "telegram-link2": "Telegram"
  }
};