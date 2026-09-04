const initSearch = () => {
  let searchWrapper = document.querySelector(".header__search-wrapper");

  if (!searchWrapper) {
    return;
  }

  let searchBtn = searchWrapper.querySelector(".header__action-btn--search");
  let loginBtn = document.querySelector(".header__action-btn--login");
  let searchForm = searchWrapper.querySelector(".search");
  let searchInp = searchForm.querySelector(".search__input");
  let resetBtn = searchForm.querySelector(".search__reset-btn");

  const closeSearch = () => {
    searchForm.classList.add("search--hidden");
    loginBtn.classList.remove("visually-hidden");
    resetBtn.classList.add("search--hidden");
    searchBtn.setAttribute("aria-expanded", "false");
    searchBtn.focus();
  };

  searchBtn.addEventListener("click", () => {
    // debugger;
    let isExpanded = searchBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeSearch();
    } else {
      searchBtn.setAttribute("aria-expanded", "true");
      searchForm.classList.remove("search--hidden");
      searchInp.classList.remove("search--hidden");
      resetBtn.classList.remove('search--hidden');
      loginBtn.classList.add("visually-hidden");

      setTimeout(() => {
        searchInp.focus();
      }, 50);
    }
  });

  resetBtn.addEventListener("click", () => {
    searchInp.value = "";
    setTimeout(() => {
      searchInp.focus();
    }, 50);
  });
  searchForm.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearch();
    }
  });
};
initSearch();
