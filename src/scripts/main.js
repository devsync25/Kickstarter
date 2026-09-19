/* global Swiper */
document.addEventListener('DOMContentLoaded', () => {
  // ---------- Menu mobile ----------

  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;
  const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (!menuToggle || !mobileMenu) {
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

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
});

const languageItems = document.querySelectorAll('.nav__lang-item');

languageItems.forEach((item) => {
  item.addEventListener('click', () => {
    languageItems.forEach((language) => {
      language.classList.remove('nav__lang-item--active');
    });

    item.classList.add('nav__lang-item--active');
  });
});

// ---------- Benefits Card (Slider Swiper - mobile) ----------

if (window.innerWidth < 640) {
  new Swiper('.benefits__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
  });
}
