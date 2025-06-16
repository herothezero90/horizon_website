$(function () {
  const $toggle = $('#lang-toggle');
  if (!$toggle.length) return;

  const stored = localStorage.getItem('horizonLang') || 'en';
  const path = window.location.pathname;

  const onHr = path.endsWith('_hr.html');
  const onEn = path.endsWith('.html') && !onHr;


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

  if (stored === 'hr' && !onHr) {
    const target = toHr(path);
    if (target !== path) { location.replace(target); return; }
  }
  if (stored === 'en' && !onEn) {
    const target = toEn(path);
    if (target !== path) { location.replace(target); return; }
  }

  $toggle.text(stored === 'en' ? 'HR' : 'EN');

  $toggle.on('click', function () {
    const nowShows = $(this).text().trim().toLowerCase();
    localStorage.setItem('horizonLang', nowShows);

    const newPath = nowShows === 'hr' ? toHr(path) : toEn(path);
    location.href = newPath;
  });
});