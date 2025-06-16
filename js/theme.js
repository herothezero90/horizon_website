/* eslint-disable no-undef */
$(document).ready(function () {
  const savedTheme = localStorage.getItem('horizonTheme') || 'lofi';
  $('html').attr('data-theme', savedTheme);

  const $themeCheckbox = $('.theme-controller');
  if ($themeCheckbox.length) {

    $themeCheckbox.prop('checked', savedTheme === 'black');

    $themeCheckbox.on('change', function () {
      const isDark = $(this).is(':checked');
      const newTheme = isDark ? 'black' : 'lofi';
      $('html').attr('data-theme', newTheme);
      localStorage.setItem('horizonTheme', newTheme);
    });
  }
});