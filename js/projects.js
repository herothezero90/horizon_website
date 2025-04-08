// /* eslint-disable no-undef */
// $(document).ready(function () {
//   $.getJSON('../data/projects.json', function (projects) {
//     const $container = $('main');

//     const iconMap = {
//       "HTML": '<i class="fab fa-html5"></i>',
//       "CSS": '<i class="fab fa-css3-alt"></i>',
//       "Bootstrap": '<i class="fab fa-bootstrap"></i>',
//       "JavaScript": '<i class="fab fa-js"></i>',
//       "PHP": '<i class="fab fa-php"></i>',
//       "MySQL": '<i class="fas fa-database"></i>',
//       "React": '<i class="fab fa-react"></i>',
//       "Node.js": '<i class="fab fa-node-js"></i>',
//       "Express": '<i class="fas fa-server"></i>',
//       "Socket.io": 'Socket.io',
//       "OSC": 'OSC',
//       "Yii": 'Yii',
//       "Autodesk PHP SDK": 'Autodesk SDK',
//       "Stripe PHP SDK": 'Stripe',
//       "ThreeJS": 'ThreeJS',
//       "Google Places": 'Google Places',
//       "Shopify API": 'Shopify API',
//       "Flightlab API": 'Flightlab API',
//       "Zammad API Client PHP": 'Zammad API'
//     };

//     projects.forEach((project, index) => {
//       const techArray = (project.tech || '').split(',').map(t => t.trim());
//       const techIcons = techArray.map(tech => `<span class="text-xl mr-2">${iconMap[tech] || tech}</span>`).join('');

//       const descItems = project.description
//         .split('.')
//         .map(d => d.trim())
//         .filter(Boolean)
//         .map(sentence => `<li>${sentence}</li>`)
//         .join('');

//       const media = [...(project.images || []), ...(project.video ? [project.video] : [])];

//       const slides = media.map((src, i) => {
//         const isVideo = src.toLowerCase().endsWith('.mp4');
//         const content = isVideo
//           ? `<video class="w-full max-h-60 mx-auto" controls><source src="${src}" type="video/mp4" /></video>`
//           : `<img src="${src}" class="object-cover w-full max-h-60 mx-auto" />`;

//         return `<div class="carousel-slide ${i === 0 ? 'block' : 'hidden'}">${content}</div>`;
//       }).join('');

//       const viewLink = project.link
//         ? `<a href="${project.link}" target="_blank" class="text-blue-500 text-sm ml-2">[View]</a>`
//         : '';

//       const cardHTML = `
//         <div class="card bg-base-100 w-full max-w-md mx-auto shadow-sm mb-10">
//           <div class="card-body">
//             <h2 class="card-title text-xl font-bold">${project.title} ${viewLink}</h2>
//             <ul class="list-disc list-inside mt-2">${descItems}</ul>
//             <div class="mt-4 flex flex-wrap">${techIcons}</div>
//           </div>
//           <figure>
//             <div class="relative carousel-wrapper" data-index="${index}">
//               <div class="carousel-slides">${slides}</div>
//               <div class="absolute left-0 right-0 top-1/2 flex justify-between px-4 -translate-y-1/2">
//                 <button class="prev-slide btn btn-circle">❮</button>
//                 <button class="next-slide btn btn-circle">❯</button>
//               </div>
//             </div>
//           </figure>
//         </div>
//       `;

//       $container.append(cardHTML);
//     });

//     // After DOM insertion: set up custom carousel logic
//     $('.carousel-wrapper').each(function () {
//       const $wrapper = $(this);
//       const $slides = $wrapper.find('.carousel-slide');
//       let currentIndex = 0;

//       function showSlide(index) {
//         $slides.removeClass('block').addClass('hidden');
//         $slides.eq(index).removeClass('hidden').addClass('block');
//       }

//       $wrapper.find('.next-slide').click(() => {
//         currentIndex = (currentIndex + 1) % $slides.length;
//         showSlide(currentIndex);
//       });

//       $wrapper.find('.prev-slide').click(() => {
//         currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
//         showSlide(currentIndex);
//       });
//     });
//   });
// });