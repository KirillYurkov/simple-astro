// const postsPerPage = 4;
// let currentPage = 1;

// const posts = document.querySelectorAll(".blog__item");
// const totalPages = Math.ceil(posts.length / postsPerPage);

// const btnPrev = document.querySelector("[data-btn-prev]");
// const btnNext = document.querySelector("[data-btn-next]");
// const pageInfo = document.querySelector("[data-page-info]");
// const pageCounter = document.querySelector("[data-page-counter]");

// function updatePage() {
//   const start = (currentPage - 1) * postsPerPage;
//   const end = start + postsPerPage;

//   posts.forEach((post, index) => {
//     if (index >= start && index < end) {
//       post.style.display = "block";
//     } else {
//       post.style.display = "none";
//     }
//   });


//   if (pageInfo) pageInfo.innerText = `${currentPage} из ${totalPages}`;
//   if (pageCounter) pageCounter.innerText = `(Страница ${currentPage})`;

//   // Блокируем кнопки на первой и последней страницах
//   if (btnPrev) {
//     btnPrev.disabled = currentPage === 1;
//     currentPage === 1
//       ? btnPrev.classList.add("disabled")
//       : btnPrev.classList.remove("disabled");
//   }

//   if (btnNext) {
//     btnNext.disabled = currentPage === totalPages;
//     currentPage === totalPages
//       ? btnNext.classList.add("disabled")
//       : btnNext.classList.remove("disabled");
//   }
// }

// // Навешиваем клики на кнопки
// btnPrev?.addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     updatePage();
//     window.scrollTo({ top: 0, behavior: "smooth" }); // Плавный скролл наверх страницы
//   }
// });

// btnNext?.addEventListener("click", () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     updatePage();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }
// });

// updatePage();
