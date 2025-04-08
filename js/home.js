/* eslint-disable no-undef */

$(document).ready(function () {
  $('#homepage-content').load('homepage.html');

  $('.theme-controller').on('change', function () {
    const isDark = $(this).is(':checked');
    const newTheme = isDark ? 'black' : 'lofi';
    $('html').attr('data-theme', newTheme);
  });
});