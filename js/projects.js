/* eslint-disable no-undef */
$(document).ready(function () {
  $('.carousel .btn[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const $carousel = $(this).closest('.carousel');
    const targetId = $(this).attr('href');
    const $target = $carousel.find(targetId);

    if ($target.length) {
      $carousel.animate({
        scrollLeft: $target.position().left + $carousel.scrollLeft()
      }, 500);
    }
  });
});