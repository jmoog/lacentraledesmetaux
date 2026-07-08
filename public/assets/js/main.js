// main.js — interactions Nav (burger mobile + dropdown desktop)
// AUCUN JS ne doit intercepter/reecrire les fragments #ancre (sitelink pills) :
// pas de smooth-scroll custom ici, on laisse le comportement natif du navigateur.

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('no-scroll', isOpen);
    });
  }

  // Dropdowns desktop (clic sur mobile, hover gere en CSS sur desktop)
  document.querySelectorAll('.nav__dd > a').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        const sub = link.nextElementSibling;
        if (sub && sub.classList.contains('nav__sub')) {
          e.preventDefault();
          sub.classList.toggle('is-visible');
        }
      }
    });
  });

  // Ombre header au scroll + disparition du header sur mobile passe 900px
  const header = document.querySelector('.hd');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('is-scrolled', window.scrollY > 10);

      const isMobile = window.innerWidth <= 768;
      const navOpen = nav && nav.classList.contains('is-open');
      header.classList.toggle('is-hidden', isMobile && !navOpen && window.scrollY > 900);
    }, { passive: true });
  }

  // FAB — bouton flottant telephone + popup contact (logo, adresse, tel, Waze, Maps)
  const fab = document.getElementById('fab');
  const fabBtn = document.getElementById('fab-btn');
  const fabPopup = document.getElementById('fab-popup');
  const fabClose = document.getElementById('fab-close');

  if (fab && fabBtn && fabPopup) {
    const closeFab = () => {
      fabBtn.setAttribute('aria-expanded', 'false');
      fabPopup.classList.remove('is-visible');
    };

    fabBtn.addEventListener('click', () => {
      const isOpen = fabBtn.getAttribute('aria-expanded') === 'true';
      fabBtn.setAttribute('aria-expanded', String(!isOpen));
      fabPopup.classList.toggle('is-visible');
    });

    if (fabClose) {
      fabClose.addEventListener('click', closeFab);
    }

    // Fermer au clic exterieur
    document.addEventListener('click', (e) => {
      if (!fab.contains(e.target)) closeFab();
    });

    // Fermer avec Echap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeFab();
    });
  }
});
