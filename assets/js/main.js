/* Buca Tile & Bath — Orlando */

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  mainNav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Scroll-reveal animation
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

// Lightbox for gallery and press images
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = lightbox.querySelector('img');
  const lbClose = lightbox.querySelector('.lb-close');

  document.querySelectorAll('.g-item img, .press-item img').forEach((img) => {
    img.parentElement.addEventListener('click', () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLb = () => {
    lightbox.classList.remove('open');
    lbImg.src = '';
    document.body.style.overflow = '';
  };
  lbClose.addEventListener('click', closeLb);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLb(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb(); });
}

// Contact form — no backend wired up yet; shows confirmation and opens a
// pre-filled email as a fallback so no lead is lost.
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nPhone: ${data.get('phone') || '-'}\nEmail: ${data.get('email')}\nInterested in: ${data.get('topic')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:info@bucatileandbath.com?subject=${encodeURIComponent('Website inquiry — ' + data.get('topic'))}&body=${body}`;
    document.getElementById('form-success').style.display = 'block';
    form.reset();
  });
}
