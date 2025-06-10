document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form[name="contact"]');

  if (form) {
    form.addEventListener('submit', async function (event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(form);

      // You can add a success message or redirect the user here
      // For now, let's just log and show a simple alert.
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/x-www-form-urlencoded'
          }
        });

        if (response.ok) {
          alert('Thank you for your message! We will get back to you shortly.');
          form.reset(); // Clear the form fields
          // Optional: Redirect to a thank you page
          // window.location.href = '/thank-you/';
        } else {
          alert('There was an error submitting your form. Please try again.');
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert('There was an error submitting your form. Please try again.');
      }
    });
  }

  // Theme toggle logic (from your existing theme.js)
  const themeController = document.querySelector('.theme-controller');
  const htmlElement = document.documentElement;

  // Set initial theme based on local storage or system preference
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    htmlElement.setAttribute('data-theme', storedTheme);
    themeController.checked = storedTheme === 'black'; // Set checkbox based on theme
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElement.setAttribute('data-theme', 'black');
    themeController.checked = true;
  }

  // Toggle theme on checkbox change
  themeController.addEventListener('change', () => {
    if (themeController.checked) {
      htmlElement.setAttribute('data-theme', 'black');
      localStorage.setItem('theme', 'black');
    } else {
      htmlElement.setAttribute('data-theme', 'lofi');
      localStorage.setItem('theme', 'lofi');
    }
    updateThemeImages(htmlElement.getAttribute('data-theme'));
  });

  // Function to update image visibility based on theme
  function updateThemeImages(currentTheme) {
    document.querySelectorAll('[data-theme-visible]').forEach(element => {
      if (element.getAttribute('data-theme-visible') === currentTheme) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  }

  // Initial update of images based on current theme
  updateThemeImages(htmlElement.getAttribute('data-theme'));
});
