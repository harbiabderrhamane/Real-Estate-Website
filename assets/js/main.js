const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("show-header")
    : header.classList.remove("show-header");
};
window.addEventListener("scroll", scrollHeader);

var swiperPopular = new Swiper(".popular-container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll-up")
    : scrollUp.classList.remove("show-scroll-up");
};

window.addEventListener("scroll", scrollUp);

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme == "dark" ? "add" : "remove"];
  darkTheme;
  themeButton.classList[selectedIcon == "bx bx moon" ? "add" : "remove"];
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(
  `.home-title,.popular-container,.subscribe-container ,.footer-container`
);
sr.reveal(`.home-description`, { delay: 500 });
sr.reveal(`.search-form`, { delay: 600 });
sr.reveal(`.home-value`, { delay: 700 });
sr.reveal(`.home-images`, { origin: "bottom", delay: 800 });
// sr.reveal(`.logo-img`, { interval: 100 });
sr.reveal(`.value-images,.contact-content`, { origin: "left" });
sr.reveal(`.value-content,.contact-images`, { origin: "right" });

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".div-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const accordionItems = document.querySelectorAll(".value-accordion-item");

accordionItems.forEach((items) => {
  const accordionHeader = items.querySelector(".value-accordion-header");
  accordionHeader.addEventListener("click", () => {
    toggleItem(items);
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value-accordion-content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
