/* eslint-disable no-undef */
$(function () {
  const $toggle = $('#lang-toggle');
  if (!$toggle.length) return;

  const path = window.location.pathname.replace(/\/+$/, ''); // makni završni '/'

  // HR  →  završava s _hr  ili  _hr.html
  const isHr = p => /_hr(\.html)?$/.test(p);

  // Pretvaranje putanja
  const toHr = p =>
    isHr(p) ? p
      : p.endsWith('.html') ? p.replace('.html', '_hr.html')
        : p + '_hr';

  const toEn = p =>
    isHr(p) ? p.replace(/_hr(\.html)?$/, '.html')
      : p.endsWith('.html') ? p
        : p;   // “clean” eng već postoji

  // ----------
  // Preferirani jezik
  // ----------
  const pref = localStorage.getItem('horizonLang') || 'en';

  if (pref === 'hr' && !isHr(path)) { location.replace(toHr(path)); return; }
  if (pref === 'en' && isHr(path)) { location.replace(toEn(path)); return; }

  // Tekst gumba
  $toggle.text(pref === 'en' ? 'HR' : 'EN');

  // ----------
  // Klik na toggle
  // ----------
  $toggle.on('click', function () {
    const next = $(this).text().trim().toLowerCase(); // hr / en
    localStorage.setItem('horizonLang', next);
    const target = next === 'hr' ? toHr(path) : toEn(path);
    location.href = target;
  });
});