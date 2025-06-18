(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let initialTheme = localStorage.getItem('horizonTheme');

  if (!initialTheme) {
    initialTheme = prefersDark ? 'black' : 'lofi';
    localStorage.setItem('horizonTheme', initialTheme);
  }

  document.documentElement.setAttribute('data-theme', initialTheme);

  document.documentElement.style.backgroundColor = initialTheme === 'black' ? '#0d0d0d' : '#ffffff';
  window.addEventListener('load', () => {
    document.documentElement.style.backgroundColor = '';
  });

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.checked = initialTheme === 'black';

    themeToggle.addEventListener('change', function () {
      const newTheme = this.checked ? 'black' : 'lofi';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('horizonTheme', newTheme);
    });
  }
})();