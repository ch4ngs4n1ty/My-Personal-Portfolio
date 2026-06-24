import { useEffect, useRef } from 'react';

function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0;
    let raf = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const starColors = [
      [240, 236, 228],
      [201, 168, 76],
      [192, 57, 43],
      [220, 200, 180],
    ];
    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * 2560,
      y: Math.random() * 1440,
      r: Math.random() * 1.6 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.0008 + 0.0003,
      col: starColors[Math.floor(Math.random() * starColors.length)],
    }));

    const embers = Array.from({ length: 40 }, () => ({
      x: Math.random() * 2560,
      y: Math.random() * 1440,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.4 + 0.1),
      r: Math.random() * 2.5 + 0.8,
      isGold: Math.random() < 0.5,
      phase: Math.random() * Math.PI * 2,
    }));

    const shootTypes = [
      { col: [192, 57, 43], speed: 5, len: 180, lw: 1.5 },
      { col: [201, 168, 76], speed: 3, len: 140, lw: 1.2 },
      { col: [240, 236, 228], speed: 7, len: 220, lw: 1.0 },
      { col: [220, 120, 60], speed: 2, len: 100, lw: 2.0 },
    ];
    const shoots = [];
    let shootTimer = 0;

    const spawnShoot = () => {
      const type = shootTypes[Math.floor(Math.random() * shootTypes.length)];
      const goLeft = Math.random() < 0.5;
      shoots.push({
        x: goLeft ? W + 20 : -20,
        y: Math.random() * H * 0.7,
        vx: (type.speed + Math.random() * 2) * (goLeft ? -1 : 1),
        vy: Math.random() * 2 + 0.5,
        len: type.len + Math.random() * 60,
        life: 0,
        maxLife: Math.random() * 50 + 35,
        col: type.col,
        lw: type.lw,
      });
    };

    const frame = (t) => {
      ctx.clearRect(0, 0, W, H);

      stars.forEach((s) => {
        s.a = 0.2 + 0.5 * Math.abs(Math.sin(t * s.speed + s.x * 0.01));
        ctx.beginPath();
        ctx.arc(s.x % W, s.y % H, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.col[0]},${s.col[1]},${s.col[2]},${s.a * 0.55})`;
        ctx.fill();
      });

      embers.forEach((e) => {
        e.x += e.vx;
        e.y += e.vy;
        e.phase += 0.02;
        e.x += Math.sin(e.phase) * 0.3;
        if (e.y < -10) { e.y = H + 10; e.x = Math.random() * W; }
        if (e.x < -10) e.x = W + 10;
        if (e.x > W + 10) e.x = -10;
        const pulse = 0.4 + 0.5 * Math.abs(Math.sin(e.phase));
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = e.isGold
          ? `rgba(201,168,76,${pulse * 0.5})`
          : `rgba(192,57,43,${pulse * 0.45})`;
        if (pulse > 0.7) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = e.isGold ? 'rgba(201,168,76,0.6)' : 'rgba(192,57,43,0.6)';
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      shootTimer++;
      if (shootTimer > 55) { spawnShoot(); shootTimer = Math.floor(Math.random() * 15); }
      if (Math.random() < 0.002) { spawnShoot(); spawnShoot(); spawnShoot(); }

      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life++;
        const progress = s.life / s.maxLife;
        const alpha = Math.sin(progress * Math.PI);
        const tailLen = Math.min(s.len, s.life * Math.abs(s.vx) * 2);
        const dirX = s.vx / Math.abs(s.vx);
        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - dirX * tailLen,
          s.y - (s.vy / Math.abs(s.vx)) * tailLen
        );
        grad.addColorStop(0, `rgba(${s.col[0]},${s.col[1]},${s.col[2]},${alpha * 0.95})`);
        grad.addColorStop(0.4, `rgba(${s.col[0]},${s.col[1]},${s.col[2]},${alpha * 0.3})`);
        grad.addColorStop(1, `rgba(${s.col[0]},${s.col[1]},${s.col[2]},0)`);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - dirX * tailLen, s.y - (s.vy / Math.abs(s.vx)) * tailLen);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.lw;
        ctx.shadowBlur = alpha > 0.4 ? 8 : 0;
        ctx.shadowColor = `rgba(${s.col[0]},${s.col[1]},${s.col[2]},0.8)`;
        ctx.stroke();
        ctx.shadowBlur = 0;
        if (s.life >= s.maxLife) shoots.splice(i, 1);
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}

export default BackgroundCanvas;
