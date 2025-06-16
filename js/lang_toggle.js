/* eslint-disable no-undef */
$(function () {
  const $toggle = $('#lang-toggle');
  if (!$toggle.length) return;

  // 1. PROČITAJ preferenciju, ali je NEMOJ prebrisati
  const pref = localStorage.getItem('horizonLang') || 'en';

  // Trenutni URL
  const getPath = () => window.location.pathname;
  const isHr = p => p.endsWith('_hr.html');
  const isEn = p => p.endsWith('.html') && !isHr(p);

  const toHr = p => isHr(p) ? p
    : isEn(p) ? p.replace('.html', '_hr.html')
      : '/index_hr.html';

  const toEn = p => isHr(p) ? p.replace('_hr.html', '.html')
    : isEn(p) ? p
      : '/index.html';

  // 2. Ako URL i preference ne odgovaraju, odmah preusmjeri
  const pathNow = getPath();
  if (pref === 'hr' && !isHr(pathNow)) { location.replace(toHr(pathNow)); return; }
  if (pref === 'en' && !isEn(pathNow)) { location.replace(toEn(pathNow)); return; }

  // 3. Postavi oznaku na gumbu
  $toggle.text(pref === 'en' ? 'HR' : 'EN');

  // 4. Klik – sprema novu preferenciju i računa PUTEM AKTUALNOG URL-a
  $toggle.on('click', function () {
    const newPref = $(this).text().trim().toLowerCase(); // hr  ili en
    localStorage.setItem('horizonLang', newPref);        // spremi samo na klik

    const freshPath = getPath();                         // uvijek svježi pathname
    const target = newPref === 'hr' ? toHr(freshPath) : toEn(freshPath);
    location.href = target;
  });
});