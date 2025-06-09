/* eslint-disable no-undef */
$(document).ready(function () {
  const $langToggle = $('#lang-toggle');
  if ($langToggle.length === 0) return;

  $langToggle.on('click', function () {
    const targetLang = $langToggle.text().trim().toUpperCase();

    if (targetLang === 'HR') {
      window.location.href = 'index_hr.html';
    } else if (targetLang === 'EN') {
      window.location.href = 'index.html';
    }
  });
});