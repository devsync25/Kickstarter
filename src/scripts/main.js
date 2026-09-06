document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;

  const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (!menuToggle || !mobileMenu) {
    console.warn("DOM!");
      return;
  }


  const openMenu = () => {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    body.classList.add('lock');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('lock');
  };

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();

    if (mobileMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
});
