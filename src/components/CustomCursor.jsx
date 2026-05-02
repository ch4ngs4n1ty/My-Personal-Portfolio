import { useEffect, useRef } from 'react';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };

    const onOver = (e) => {
      const target = e.target;
      if (target instanceof Element && target.closest('a, button, [role="button"]')) {
        document.body.classList.add('cursor-hover');
      }
    };
    const onOut = (e) => {
      const target = e.target;
      if (target instanceof Element && target.closest('a, button, [role="button"]')) {
        document.body.classList.remove('cursor-hover');
      }
    };

    const tick = () => {
      const p = pos.current;
      if (dotRef.current) {
        dotRef.current.style.left = p.mx + 'px';
        dotRef.current.style.top = p.my + 'px';
      }
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + 'px';
        ringRef.current.style.top = p.ry + 'px';
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

export default CustomCursor;
