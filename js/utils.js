// export function loadTemplate(path) {
//   return fetch(path)
//     .then(res => res.text())
//     .then(html => {
//       document.body.insertAdjacentHTML('beforeend', html);
//     });
// }

// export function initSwiper(containerSelector = '.swiper-in-card') {
//   new Swiper(containerSelector, {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });
// }

// export function fetchJSON(path) {
//   return fetch(path).then(res => {
//     if (!res.ok) {
//       throw new Error(`Failed to load JSON from ${path}`);
//     }
//     return res.json();
//   });
// }