import { useEffect, useRef } from 'react';

/* Deep-space field rendered in three parallax planes.
   Far  — dense, tiny, cold; barely moves. Reads as distance.
   Mid  — the working starfield; drifts with the scroll.
   Near — sparse warm embers + occasional comets; moves most.
   Depth comes from the parallax ratio, not from brightness alone. */

const PLANES = [
  { count: 150, depth: 0.16, rMin: 0.25, rMax: 0.75, alpha: 0.42, twinkle: 0.00035 },
  { count: 90,  depth: 0.42, rMin: 0.5,  rMax: 1.35, alpha: 0.62, twinkle: 0.00065 },
  { count: 38,  depth: 0.85, rMin: 0.9,  rMax: 2.1,  alpha: 0.85, twinkle: 0.00110 },
];

// cold distance, warm foreground — the palette's crimson/gold live up close
const FAR_COLORS = [[186, 196, 232], [208, 214, 240], [160, 172, 216]];
const NEAR_COLORS = [[242, 239, 233], [201, 168, 76], [192, 57, 43], [226, 168, 80]];

function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0, H = 0, dpr = 1, raf = 0, scrollY = window.scrollY;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const rand = (a, b) => a + Math.random() * (b - a);

    // field spans 2x viewport height so parallax never runs out of stars
    const build = () =>
      PLANES.map((p, i) => ({
        ...p,
        stars: Array.from({ length: p.count }, () => ({
          x: Math.random(),
          y: Math.random(),
          r: rand(p.rMin, p.rMax),
          phase: Math.random() * Math.PI * 2,
          col: (i === 2 ? NEAR_COLORS : FAR_COLORS)[
            Math.floor(Math.random() * (i === 2 ? NEAR_COLORS : FAR_COLORS).length)
          ],
        })),
      }));
    let planes = build();

    // sparse comets — rare enough to feel like an event, not decoration
    const comets = [];
    let cometTimer = rand(220, 420);
    const spawnComet = () => {
      const fromLeft = Math.random() < 0.5;
      const speed = rand(3.4, 6.2);
      const warm = Math.random() < 0.55;
      comets.push({
        x: fromLeft ? -40 : W + 40,
        y: rand(H * 0.04, H * 0.62),
        vx: fromLeft ? speed : -speed,
        vy: rand(0.5, 1.5),
        len: rand(120, 260),
        life: 0,
        max: rand(60, 95),
        col: warm ? [240, 214, 160] : [196, 206, 240],
      });
    };

    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);

    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);

      const fieldH = H * 2;

      planes.forEach((plane) => {
        const shift = (scrollY * plane.depth) % fieldH;
        plane.stars.forEach((s) => {
          const px = s.x * W;
          let py = s.y * fieldH - shift;
          if (py < -10) py += fieldH;
          if (py > H + 10) py -= fieldH;
          if (py < -10 || py > H + 10) return;

          const tw = reduced ? 0.8 : 0.55 + 0.45 * Math.sin(t * plane.twinkle + s.phase);
          const a = plane.alpha * tw;
          const [r, g, b] = s.col;

          // brightest near-plane stars get a soft bloom
          if (plane.depth > 0.6 && s.r > 1.5) {
            const grd = ctx.createRadialGradient(px, py, 0, px, py, s.r * 5);
            grd.addColorStop(0, `rgba(${r},${g},${b},${a * 0.5})`);
            grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(px, py, s.r * 5, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.beginPath();
          ctx.arc(px, py, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.fill();
        });
      });

      if (!reduced) {
        if (--cometTimer <= 0) { spawnComet(); cometTimer = rand(260, 560); }

        for (let i = comets.length - 1; i >= 0; i--) {
          const c = comets[i];
          c.x += c.vx; c.y += c.vy; c.life++;
          const fade = Math.sin((c.life / c.max) * Math.PI);
          const dir = Math.sign(c.vx);
          const tail = Math.min(c.len, c.life * Math.abs(c.vx) * 1.6);
          const tx = c.x - dir * tail;
          const ty = c.y - (c.vy / Math.abs(c.vx)) * tail;
          const [r, g, b] = c.col;
          const grd = ctx.createLinearGradient(c.x, c.y, tx, ty);
          grd.addColorStop(0, `rgba(${r},${g},${b},${fade * 0.9})`);
          grd.addColorStop(0.35, `rgba(${r},${g},${b},${fade * 0.22})`);
          grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.beginPath();
          ctx.moveTo(c.x, c.y);
          ctx.lineTo(tx, ty);
          ctx.strokeStyle = grd;
          ctx.lineWidth = 1.15;
          ctx.lineCap = 'round';
          ctx.stroke();
          if (c.life >= c.max) comets.splice(i, 1);
        }
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    // pause the loop when the tab is hidden
    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(draw);
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}

export default BackgroundCanvas;
