// Draw trace rules and pinout traces as they scroll into view.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets = document.querySelectorAll<HTMLElement>('.trace-rule, [data-draw]');

if (reduce || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-drawn'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-drawn');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  targets.forEach((el) => io.observe(el));
}

// Theme toggle.
const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
if (toggle) {
  const root = document.documentElement;
  const sync = () => {
    const dark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
  };
  sync();
  toggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('theme', root.dataset.theme);
    } catch {}
    sync();
  });
}

// Pinout: hovering or focusing a pin lights its row in the pin table, and vice versa.
const pinEls = document.querySelectorAll<HTMLElement>('[data-pin]');
const setLit = (n: string | undefined, on: boolean) => {
  if (!n) return;
  document.querySelectorAll(`[data-pin="${n}"]`).forEach((el) => el.classList.toggle('is-lit', on));
};
pinEls.forEach((el) => {
  const n = el.dataset.pin;
  el.addEventListener('pointerenter', () => setLit(n, true));
  el.addEventListener('pointerleave', () => setLit(n, false));
  el.addEventListener('focusin', () => setLit(n, true));
  el.addEventListener('focusout', () => setLit(n, false));
});
