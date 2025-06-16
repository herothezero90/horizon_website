/* eslint-disable no-undef */
$(function () {
  const $toggle = $('#lang-toggle');
  if (!$toggle.length) return;

  const isHr = p => /_hr(\.html)?$/.test(p);

  const toHr = p => {
    if (isHr(p)) return p;
    if (p === '' || p === '/') return '/index_hr.html';
    if (p.endsWith('.html')) return p.replace('.html', '_hr.html');
    return p + '_hr.html';
  };

  const toEn = p => {
    if (p === '' || p === '/') return '/index.html';
    if (isHr(p)) return p.replace(/_hr(\.html)?$/, '.html');
    return p;
  };

  const path = window.location.pathname.replace(/\/+$/, '');

  const pref = localStorage.getItem('horizonLang') || 'en';

  if (pref === 'hr' && !isHr(path)) { location.replace(toHr(path)); return; }
  if (pref === 'en' && isHr(path)) { location.replace(toEn(path)); return; }

  $toggle.text(pref === 'en' ? 'HR' : 'EN');

  $toggle.on('click', function () {
    const next = $(this).text().trim().toLowerCase();
    localStorage.setItem('horizonLang', next);
    location.href = next === 'hr' ? toHr(path) : toEn(path);
  });
});