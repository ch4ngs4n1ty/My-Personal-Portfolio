import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Constellation from './Constellation';

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
}

// The constellation stays out of the reading path: a small button in the
// corner opens it full screen, and clicking a node closes it and jumps to
// that section. The canvas only runs while the view is open.
function ConstellationDock() {
  const [open, setOpen] = useState(false);
  const launcherRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const launcher = launcherRef.current;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      launcher?.focus({ preventScroll: true });
    };
  }, [open]);

  const navigate = (id) => {
    setOpen(false);
    // wait for the page to unlock scrolling before moving
    setTimeout(() => scrollToSection(id), 50);
  };

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className="constellation-launcher"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span className="constellation-launcher-orb" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 16 7 9m9 7 10-5m-10 5-4 10m4-10 9 8M7 9l5 17m14-15-1 13" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
            <circle cx="16" cy="16" r="2.6" fill="currentColor" />
            <circle cx="7" cy="9" r="1.5" fill="currentColor" />
            <circle cx="26" cy="11" r="1.5" fill="currentColor" />
            <circle cx="12" cy="26" r="1.3" fill="currentColor" />
            <circle cx="25" cy="24" r="1.3" fill="currentColor" />
          </svg>
        </span>
        <span className="constellation-launcher-label">Constellation view</span>
      </button>

      {open && createPortal(
        <div
          className="constellation-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="constellation-title"
        >
          <div className="constellation-head">
            <p className="constellation-kicker">// My projects, roles, and tools</p>
            <h2 id="constellation-title" className="constellation-title">The Constellation</h2>
            <p className="hero-hint">
              <span><em>Drag</em> to rotate</span>
              <i className="hint-sep" aria-hidden="true"></i>
              <span><em>Click</em> a node to jump to it</span>
            </p>
          </div>
          <Constellation onNavigate={navigate} />
          <button
            ref={closeRef}
            type="button"
            className="constellation-close"
            aria-label="Close constellation view"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>,
        document.body
      )}
    </>
  );
}

export default ConstellationDock;
