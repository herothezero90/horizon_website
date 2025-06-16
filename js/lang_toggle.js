/* eslint-disable no-undef */
$(function () {
  const $toggle = $('#lang-toggle');
  if (!$toggle.length) return;

  const path = window.location.pathname;
  const onHrPage = path.endsWith('_hr.html');
  const current = onHrPage ? 'hr' : 'en';

  localStorage.setItem('horizonLang', current);

  function toHr(p) {
    if (p.endsWith('_hr.html')) return p;
    if (p.endsWith('.html')) return p.replace('.html', '_hr.html');
    return '/index_hr.html';
  }
  function toEn(p) {
    if (p.endsWith('_hr.html')) return p.replace('_hr.html', '.html');
    if (p.endsWith('.html')) return p;
    return '/index.html';
  }

  const targetPath = current === 'hr' ? toHr(path) : toEn(path);
  if (targetPath !== path) {
    location.replace(targetPath);
    return;
  }

  $toggle.text(current === 'en' ? 'HR' : 'EN');

  $toggle.on('click', function () {
    const nowShows = $(this).text().trim().toLowerCase();
    localStorage.setItem('horizonLang', nowShows);

    const newPath = nowShows === 'hr' ? toHr(path) : toEn(path);
    location.href = newPath;
  });
});
