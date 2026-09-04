const initBurger = () => {
  let header = document.querySelector(".header");
  let burger = header.querySelector(".burger");

  if (!header) {
    return;
  }

  const closeMobileNav = () => {
    burger.classList.remove("header-nav--open");
    header.classList.remove("header-nav--open");
    burger.setAttribute("aria-expanded", "false");
  };

  burger.addEventListener("click", () => {
    let isExpanded = burger.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMobileNav();
    } else {
      header.classList.add("header-nav--open");
      burger.classList.add("header-nav--open");
      burger.setAttribute("aria-expanded", 'true');
    }
  });
};
initBurger();
