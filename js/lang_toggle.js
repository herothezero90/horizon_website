/* eslint-disable no-undef */
$(document).ready(function () {
  const $toggle = $('#lang-toggle');
  if ($toggle.length === 0) return;

  const stored = localStorage.getItem('horizonLang') || 'en';

  const path = window.location.pathname;
  const onHr = path.endsWith('_hr.html');

  if (stored === 'hr' && !onHr) {
    window.location.href = path.replace('.html', '_hr.html');
    return;
  }
  if (stored === 'en' && onHr) {
    window.location.href = path.replace('_hr.html', '.html');
    return;
  }

  $toggle.text(stored === 'en' ? 'HR' : 'EN');

  $toggle.on('click', function () {
    const nowShows = $(this).text().trim().toUpperCase();
    const target = nowShows.toLowerCase();
    localStorage.setItem('horizonLang', target);


    const newPath =
      target === 'hr'
        ? window.location.pathname.replace('.html', '_hr.html')
        : window.location.pathname.replace('_hr.html', '.html');

    window.location.href = newPath;
  });
});