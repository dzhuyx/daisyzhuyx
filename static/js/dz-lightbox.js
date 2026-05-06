/* Daisy's polaroid lightbox.
   Each .dz-jd-collage is its own independent gallery; clicks open a darkened
   overlay scoped to that gallery's images, with prev/next/close controls and
   keyboard nav (← → Esc). No third-party deps — vanilla in an IIFE. */

(function () {
  'use strict';

  function init() {
    const collages = document.querySelectorAll('.dz-jd-collage');
    if (!collages.length) return;

    // Build the overlay shell once and reuse it across all galleries.
    const overlay = document.createElement('div');
    overlay.className = 'dz-lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = [
      '<button class="dz-lb-close" type="button" aria-label="Close">&times;</button>',
      '<button class="dz-lb-prev"  type="button" aria-label="Previous">&lsaquo;</button>',
      '<button class="dz-lb-next"  type="button" aria-label="Next">&rsaquo;</button>',
      '<div class="dz-lb-stage"><img class="dz-lb-image" alt=""></div>',
      '<div class="dz-lb-counter" aria-live="polite"></div>'
    ].join('');
    document.body.appendChild(overlay);

    const imgEl     = overlay.querySelector('.dz-lb-image');
    const counterEl = overlay.querySelector('.dz-lb-counter');
    const prevBtn   = overlay.querySelector('.dz-lb-prev');
    const nextBtn   = overlay.querySelector('.dz-lb-next');
    const closeBtn  = overlay.querySelector('.dz-lb-close');

    let gallery = [];
    let index   = 0;
    let lastFocus = null;

    function render() {
      const item = gallery[index];
      // Cross-fade by clearing src first; cheap and works without extra timers.
      imgEl.classList.remove('dz-lb-image--ready');
      imgEl.src = item.large || item.src;
      imgEl.alt = item.alt || '';
      counterEl.textContent = (index + 1) + ' / ' + gallery.length;
      // Reveal once the image is decoded for a clean fade.
      imgEl.decode ? imgEl.decode().then(reveal, reveal) : reveal();
    }
    function reveal() { imgEl.classList.add('dz-lb-image--ready'); }

    function open(items, startIndex) {
      gallery = items;
      index   = startIndex;
      lastFocus = document.activeElement;
      render();
      overlay.classList.add('dz-lb-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('dz-lb-locked');
      closeBtn.focus({ preventScroll: true });
    }

    function close() {
      overlay.classList.remove('dz-lb-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('dz-lb-locked');
      // Drop the src so a re-open feels fresh and doesn't flash the prior image.
      imgEl.removeAttribute('src');
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    }

    function nav(delta) {
      if (!gallery.length) return;
      index = (index + delta + gallery.length) % gallery.length;
      render();
    }

    // Wire each gallery's tiles.
    collages.forEach(function (collage) {
      const tiles = Array.from(collage.querySelectorAll('.dz-tile img'));
      const items = tiles.map(function (img) {
        return {
          src:   img.currentSrc || img.src,
          large: img.dataset.large || img.currentSrc || img.src,
          alt:   img.alt
        };
      });
      tiles.forEach(function (img, i) {
        img.addEventListener('click', function () { open(items, i); });
      });
    });

    // Controls.
    closeBtn.addEventListener('click', close);
    prevBtn .addEventListener('click', function (e) { e.stopPropagation(); nav(-1); });
    nextBtn .addEventListener('click', function (e) { e.stopPropagation(); nav(1);  });
    overlay .addEventListener('click', function (e) { if (e.target === overlay) close(); });

    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('dz-lb-open')) return;
      if (e.key === 'Escape')      { e.preventDefault(); close(); }
      else if (e.key === 'ArrowLeft')  { e.preventDefault(); nav(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); nav(1);  }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
