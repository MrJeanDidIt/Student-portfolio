(function () {
  function initThemeToggle() {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');

    if (!toggle) {
      return;
    }

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      if (storedTheme === 'dark') {
        root.removeAttribute('data-theme');
      } else {
        root.setAttribute('data-theme', storedTheme);
      }
    }

    function updateToggleLabel() {
      const isLight = root.getAttribute('data-theme') === 'light';
      toggle.textContent = isLight ? 'Dark Mode' : 'Light Mode';
      toggle.setAttribute('aria-pressed', String(isLight));
    }

    toggle.addEventListener('click', function () {
      const isLight = root.getAttribute('data-theme') === 'light';
      const nextTheme = isLight ? 'dark' : 'light';

      if (nextTheme === 'dark') {
        root.removeAttribute('data-theme');
      } else {
        root.setAttribute('data-theme', nextTheme);
      }

      localStorage.setItem('theme', nextTheme);
      updateToggleLabel();
    });

    updateToggleLabel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
