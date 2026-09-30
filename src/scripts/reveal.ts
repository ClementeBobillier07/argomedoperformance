// Reveal suave al entrar en pantalla. Sin JS el contenido se ve igual (mejora progresiva).
const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
  );
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('is-in'));
}
