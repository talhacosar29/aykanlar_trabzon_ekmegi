const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const closeBtn = document.querySelector('[data-nav-close]');
const mobile = document.querySelector('[data-mobile-nav]');

const onScroll = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const setOpen = (open) => {
  document.body.classList.toggle('nav-open', open);
  toggle?.setAttribute('aria-expanded', String(open));
};
toggle?.addEventListener('click', () => setOpen(true));
closeBtn?.addEventListener('click', () => setOpen(false));
mobile?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
);
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

const lb = document.querySelector('[data-lightbox]');
if (lb) {
  const img = lb.querySelector('img');
  const caption = lb.querySelector('[data-lightbox-caption]');
  const open = (src, alt) => {
    img.src = src;
    img.alt = alt || '';
    if (caption) caption.textContent = alt || '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  };
  const hide = () => {
    lb.hidden = true;
    document.body.style.overflow = '';
  };
  document.querySelectorAll('[data-gallery-item]').forEach((item) => {
    item.addEventListener('click', () => open(item.dataset.src, item.dataset.alt));
  });
  lb.querySelector('[data-lightbox-close]')?.addEventListener('click', hide);
  lb.addEventListener('click', (e) => {
    if (e.target === lb) hide();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lb.hidden) hide();
  });
}

document.querySelectorAll('[data-filter]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach((b) => b.classList.toggle('is-on', b === btn));
    document.querySelectorAll('[data-cat]').forEach((card) => {
      card.hidden = f !== 'all' && card.dataset.cat !== f;
    });
  });
});

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('[data-form-note]');
    if (note) {
      note.hidden = false;
      note.textContent = 'Mesajınız alındı. Bu bir demo formudur; gerçek gönderim yapılmaz.';
    }
    form.reset();
  });
}
