document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('lang-toggle');

  if (toggle) {
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
  }

  const contactForm = document.querySelector('form[name="contact"]');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new URLSearchParams(new FormData(contactForm)).toString();

      fetch(contactForm.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/x-www-form-urlencoded'
        },
        body: formData
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
        })
        .then(() => {
          alert('Thank you for your message! We will get back to you shortly.');
          contactForm.reset();
        })
        .catch(error => {
          console.error('Submission error:', error);
          alert('There was an error submitting your form. Please try again.');
        });
    });
  }

  const themeController = document.querySelector('.theme-controller');
  const htmlElement = document.documentElement;

  const storedTheme = localStorage.getItem('theme');

  if (storedTheme) {
    htmlElement.setAttribute('data-theme', storedTheme);
    if (themeController) {
      themeController.checked = (storedTheme === 'black');
    }
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElement.setAttribute('data-theme', 'black');
    if (themeController) {
      themeController.checked = true;
    }
  }

  if (themeController) {
    themeController.addEventListener('change', function () {
      if (this.checked) {
        htmlElement.setAttribute('data-theme', 'black');
        localStorage.setItem('theme', 'black');
      } else {
        htmlElement.setAttribute('data-theme', 'lofi');
        localStorage.setItem('theme', 'lofi');
      }
      updateThemeImages(htmlElement.getAttribute('data-theme'));
    });
  }

  function updateThemeImages(currentTheme) {
    document.querySelectorAll('[data-theme-visible]').forEach(function (element) {
      if (element.getAttribute('data-theme-visible') === currentTheme) {
        element.style.display = '';
      } else {
        element.style.display = 'none';
      }
    });
  }

  updateThemeImages(htmlElement.getAttribute('data-theme'));
});