/* eslint-disable no-undef */
$(document).ready(function () {
  const $contactForm = $('form[name="contact"]');

  if ($contactForm.length) {
    $contactForm.on('submit', function (event) {
      event.preventDefault();

      const formData = $contactForm.serialize();

      $.ajax({
        url: $contactForm.attr('action'),
        method: 'POST',
        data: formData,
        headers: {
          'Accept': 'application/x-www-form-urlencoded'
        },
        success: function () {
          alert('Thank you for your message! We will get back to you shortly.');
          $contactForm[0].reset();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error('Submission error:', textStatus, errorThrown);
          alert('There was an error submitting your form. Please try again.');
        }
      });
    });
  }

  const $themeController = $('.theme-controller');
  const $htmlElement = $('html');

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    $htmlElement.attr('data-theme', storedTheme);
    $themeController.prop('checked', storedTheme === 'black');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $htmlElement.attr('data-theme', 'black');
    $themeController.prop('checked', true);
  }

  $themeController.on('change', function () {
    if ($(this).prop('checked')) {
      $htmlElement.attr('data-theme', 'black');
      localStorage.setItem('theme', 'black');
    } else {
      $htmlElement.attr('data-theme', 'lofi');
      localStorage.setItem('theme', 'lofi');
    }
    updateThemeImages($htmlElement.attr('data-theme'));
  });

  function updateThemeImages(currentTheme) {
    $('[data-theme-visible]').each(function () {
      if ($(this).attr('data-theme-visible') === currentTheme) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // Initial update of images based on current theme
  updateThemeImages($htmlElement.attr('data-theme'));
});