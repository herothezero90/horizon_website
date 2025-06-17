/* eslint-disable no-undef */
$(document).ready(function () {
  const savedTheme = localStorage.getItem('horizonTheme');
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;

  // Determine the theme to apply on load
  let initialTheme;
  if (savedTheme) {
    initialTheme = savedTheme;
  } else {
    initialTheme = prefersDark ? 'black' : 'lofi';
  }

  // Apply the theme to the HTML element
  $('html').attr('data-theme', initialTheme);

  // Set the initial state of the theme toggle checkbox
  const $themeCheckbox = $('#theme-toggle'); // Use ID for more specific targeting
  if ($themeCheckbox.length) {
    // Check the box if the initial theme is 'black' (dark)
    $themeCheckbox.prop('checked', initialTheme === 'black');

    // Add event listener for theme changes
    $themeCheckbox.on('change', function () {
      const isDark = $(this).is(':checked');
      const newTheme = isDark ? 'black' : 'lofi';
      $('html').attr('data-theme', newTheme);
      localStorage.setItem('horizonTheme', newTheme);
    });
  }
});