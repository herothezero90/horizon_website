document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('lang-toggle');

  if (!toggle) {
    return;
  }

  const isHr = (p) => /_hr(\.html)?$/.test(p);

  const toHr = (p) => {
    if (isHr(p)) return p;
    if (p === '' || p === '/') return '/index_hr.html';
    if (p.endsWith('.html')) return p.replace('.html', '_hr.html');
    return p + '_hr.html';
  };

  const toEn = (p) => {
    if (p === '' || p === '/') return '/index.html';
    if (isHr(p)) return p.replace(/_hr(\.html)?$/, '.html');
    return p;
  };

  const path = window.location.pathname.replace(/\/+$/, '');

  const pref = localStorage.getItem('horizonLang') || 'en';

  if (pref === 'hr' && !isHr(path)) {
    window.location.replace(toHr(path));
    return;
  }
  if (pref === 'en' && isHr(path)) {
    window.location.replace(toEn(path));
    return;
  }

  toggle.textContent = (pref === 'en' ? 'HR' : 'EN');

  toggle.addEventListener('click', function () {
    const next = this.textContent.trim().toLowerCase();
    localStorage.setItem('horizonLang', next);
    window.location.href = (next === 'hr' ? toHr(path) : toEn(path));
  });
});