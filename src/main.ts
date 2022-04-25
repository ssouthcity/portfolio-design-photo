const navToggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
const navLinks = document.querySelectorAll<HTMLLinkElement>(".nav__link");

navToggle!.addEventListener("click", (_) => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((el) => {
  el.addEventListener("click", (_) => {
    document.body.classList.toggle("nav-open");
  });
});