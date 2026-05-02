import { useEffect, useRef } from 'react';
import projectsData from '../data/projects.json';
import experiencesData from '../data/experiences.json';
import toolsData from '../data/tools.json';

const TOOL_TYPES = {
  Python: 'skill', Java: 'skill', C: 'skill', SQL: 'skill', JavaScript: 'skill',
  TypeScript: 'skill', Angular: 'skill', 'Spring Boot': 'skill', JUnit: 'skill',
  Pandas: 'ml', 'scikit-learn': 'ml', Matplotlib: 'ml', Jupyter: 'ml',
  Git: 'devops', Linux: 'devops', MobaXterm: 'devops', Valgrind: 'devops', DataGrip: 'devops',
};

function buildNodes() {
  const nodes = [{ label: 'Ethan Chang', type: 'core', link: null }];
  projectsData.forEach((p) => nodes.push({ label: p.title, type: 'project', link: 'projects' }));
  experiencesData.forEach((e) => nodes.push({ label: e.title, type: 'exp', link: 'experience' }));
  toolsData.forEach((t) => nodes.push({ label: t.name, type: TOOL_TYPES[t.name] || 'skill', link: 'tools' }));
  return nodes;
}

function fibSphere(n, radius) {
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius]);
  }
  return pts;
}

function Constellation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = 0, H = 0;
    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const nodeData = buildNodes();
    const nonCoreCount = nodeData.length - 1;
    const sphere = fibSphere(nonCoreCount, 300);
    const nodes = nodeData.map((d, i) => {
      if (i === 0) return { ...d, x: 0, y: 0, z: 0 };
      const [x, y, z] = sphere[i - 1];
      return { ...d, x, y, z };
    });

    const edges = [];
    for (let i = 1; i < nodes.length; i++) edges.push([0, i]);

    const projectStart = 1;
    const expStart = projectStart + projectsData.length;
    const toolStart = expStart + experiencesData.length;

    const crossLinks = [];
    for (let i = 0; i < experiencesData.length - 1; i++) {
      crossLinks.push([expStart + i, expStart + i + 1]);
    }
    for (let i = 0; i < projectsData.length; i++) {
      const projIdx = projectStart + i;
      const project = projectsData[i];
      project.tech.forEach((tech) => {
        const toolIdx = toolsData.findIndex((t) => t.name === tech);
        if (toolIdx >= 0) crossLinks.push([projIdx, toolStart + toolIdx]);
      });
    }
    crossLinks.forEach((c) => edges.push(c));

    const packets = edges.slice(0, 28).map(([a, b]) => ({
      from: a, to: b,
      t: Math.random(),
      speed: 0.003 + Math.random() * 0.005,
      isGold: nodes[b] && (nodes[b].type === 'project' || nodes[b].type === 'exp'),
    }));

    const dust = Array.from({ length: 140 }, () => ({
      x: (Math.random() - 0.5) * 1100,
      y: (Math.random() - 0.5) * 900,
      z: (Math.random() - 0.5) * 1100,
      r: Math.random() * 1.5 + 0.3,
      isGold: Math.random() < 0.15,
    }));

    let mouseX = 0, mouseY = 0;
    let isDragging = false, didDrag = false;
    let lastDragX = 0, lastDragY = 0;
    let rotY = 0.3, rotX = 0.15;
    let velY = 0.002, velX = 0;
    let hoveredNode = -1;

    canvas.style.pointerEvents = 'all';
    canvas.style.cursor = 'grab';

    let projected = [];
    const flashParticles = [];

    const spawnFlash = (sx, sy, isGold) => {
      for (let i = 0; i < 18; i++) {
        const angle = (i / 18) * Math.PI * 2 + Math.random() * 0.3;
        const speed = 1.5 + Math.random() * 3;
        flashParticles.push({
          x: sx, y: sy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0, maxLife: 30 + Math.random() * 20,
          r: Math.random() * 3 + 1,
          isGold,
        });
      }
    };

    const handleNodeClick = () => {
      if (didDrag || hoveredNode < 0) return;
      const node = nodes[hoveredNode];
      const proj = projected[hoveredNode];
      if (proj) spawnFlash(proj.sx, proj.sy, node.type === 'project');
      if (node && node.link) {
        setTimeout(() => {
          const target = document.getElementById(node.link);
          if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 220);
      }
    };

    const onMouseDown = (e) => {
      isDragging = true; didDrag = false;
      lastDragX = e.clientX; lastDragY = e.clientY;
      canvas.style.cursor = 'grabbing';
    };
    const onMouseUp = () => {
      handleNodeClick();
      isDragging = false;
      canvas.style.cursor = hoveredNode >= 0 ? 'pointer' : 'grab';
    };
    const onMouseMove = (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      if (isDragging) {
        const dx = e.clientX - lastDragX;
        const dy = e.clientY - lastDragY;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) didDrag = true;
        velY = dx * 0.006;
        velX = dy * 0.006;
        rotY += velY;
        rotX += velX;
        lastDragX = e.clientX;
        lastDragY = e.clientY;
      }
    };

    const onTouchStart = (e) => {
      isDragging = true; didDrag = false;
      lastDragX = e.touches[0].clientX;
      lastDragY = e.touches[0].clientY;
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
      e.preventDefault();
    };
    const onTouchMove = (e) => {
      const dx = e.touches[0].clientX - lastDragX;
      const dy = e.touches[0].clientY - lastDragY;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) didDrag = true;
      velY = dx * 0.006;
      velX = dy * 0.006;
      rotY += velY;
      rotX += velX;
      lastDragX = e.touches[0].clientX;
      lastDragY = e.touches[0].clientY;
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
      e.preventDefault();
    };
    const onTouchEnd = () => {
      handleNodeClick();
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);

    const project3D = (x, y, z) => {
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const y1 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;
      const fov = 500;
      const scale = fov / (fov + z2 + 400);
      return { sx: x1 * scale, sy: y1 * scale, z: z2, scale };
    };

    let t = 0;
    let explodeProgress = sessionStorage.getItem('constellation_shown') ? 1 : 0;
    let explodeActive = false;
    let shockwaves = [];

    const triggerExplosion = () => {
      if (explodeActive || explodeProgress >= 1) return;
      explodeActive = true;
      sessionStorage.setItem('constellation_shown', '1');
      shockwaves = [
        { r: 0, maxR: 500, alpha: 0.8, speed: 12, color: [192, 57, 43] },
        { r: 0, maxR: 380, alpha: 0.6, speed: 8,  color: [201, 168, 76] },
        { r: 0, maxR: 260, alpha: 0.5, speed: 5,  color: [220, 120, 60] },
      ];
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setTimeout(triggerExplosion, 200);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    obs.observe(canvas);

    let raf = 0;
    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.008;

      if (explodeActive && explodeProgress < 1) {
        explodeProgress += 0.018;
        if (explodeProgress >= 1) { explodeProgress = 1; explodeActive = false; }
      }
      const eased = explodeProgress < 1 ? 1 - Math.pow(1 - explodeProgress, 3) : 1;

      if (!isDragging) {
        velY += (0.002 - velY) * 0.05;
        velX += (0 - velX) * 0.05;
        rotY += velY;
        rotX += velX;
      }

      const cx = W / 2, cy = H / 2;

      projected = nodes.map((n) => {
        const p = project3D(n.x * eased, n.y * eased, n.z * eased);
        return { ...n, ...p, sx: cx + p.sx, sy: cy + p.sy };
      });

      const sorted = [...projected].sort((a, b) => a.z - b.z);

      [
        [cx - 80, cy - 60, 340, 'rgba(192,57,43,0.06)'],
        [cx + 80, cy + 50, 280, 'rgba(201,168,76,0.05)'],
        [cx - 50, cy + 90, 220, 'rgba(220,120,60,0.04)'],
      ].forEach(([x, y, r, c]) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, c);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      });

      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 400);
      grd.addColorStop(0, 'rgba(192,57,43,0.05)');
      grd.addColorStop(0.4, 'rgba(201,168,76,0.025)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(cx - 440, cy - 440, 880, 880);

      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.r += sw.speed;
        sw.alpha *= 0.94;
        if (sw.r > sw.maxR || sw.alpha < 0.01) { shockwaves.splice(i, 1); continue; }
        const swFade = sw.alpha * (1 - sw.r / sw.maxR);
        ctx.beginPath();
        ctx.arc(cx, cy, sw.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${sw.color[0]},${sw.color[1]},${sw.color[2]},${swFade})`;
        ctx.lineWidth = 2.5 * (1 - sw.r / sw.maxR) + 0.5;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${sw.color[0]},${sw.color[1]},${sw.color[2]},0.6)`;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      if (explodeProgress > 0 && explodeProgress < 0.3) {
        const flashA = ((0.3 - explodeProgress) / 0.3) * 0.7;
        const flashR = explodeProgress * 200;
        const fg = ctx.createRadialGradient(cx, cy, 0, cx, cy, flashR);
        fg.addColorStop(0, `rgba(240,200,160,${flashA})`);
        fg.addColorStop(0.3, `rgba(192,57,43,${flashA * 0.6})`);
        fg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = fg;
        ctx.fillRect(cx - flashR, cy - flashR, flashR * 2, flashR * 2);
      }

      dust.forEach((d) => {
        const p = project3D(d.x, d.y, d.z);
        const a = 0.15 + p.scale * 0.3;
        ctx.beginPath();
        ctx.arc(cx + p.sx, cy + p.sy, d.r * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = d.isGold ? `rgba(201,168,76,${a})` : `rgba(192,57,43,${a * 0.7})`;
        ctx.fill();
      });

      edges.forEach(([a, b]) => {
        const na = projected[a], nb = projected[b];
        const depth = (na.z + nb.z) * 0.5;
        const alpha = Math.max(0.03, 0.18 - depth * 0.0003);
        ctx.beginPath();
        ctx.moveTo(na.sx, na.sy);
        ctx.lineTo(nb.sx, nb.sy);
        const isCross = crossLinks.some(([ca, cb]) => (ca === a && cb === b) || (ca === b && cb === a));
        ctx.strokeStyle = isCross
          ? `rgba(201,168,76,${alpha * 0.8})`
          : `rgba(192,57,43,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      packets.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;
        const fx = nodes[p.from].x + (nodes[p.to].x - nodes[p.from].x) * p.t;
        const fy = nodes[p.from].y + (nodes[p.to].y - nodes[p.from].y) * p.t;
        const fz = nodes[p.from].z + (nodes[p.to].z - nodes[p.from].z) * p.t;
        const pProj = project3D(fx * eased, fy * eased, fz * eased);
        const alpha = 0.4 + pProj.scale * 0.5;
        ctx.beginPath();
        ctx.arc(cx + pProj.sx, cy + pProj.sy, 2 * pProj.scale, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold ? `rgba(201,168,76,${alpha})` : `rgba(240,100,80,${alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.isGold ? 'rgba(201,168,76,0.8)' : 'rgba(192,57,43,0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      hoveredNode = -1;
      const rect = canvas.getBoundingClientRect();
      const lx = mouseX - rect.left, ly = mouseY - rect.top;
      projected.forEach((n, i) => {
        const dx = lx - n.sx, dy = ly - n.sy;
        const hitR = n.type === 'core' ? 24 : 14;
        if (Math.sqrt(dx * dx + dy * dy) < hitR) hoveredNode = i;
      });
      canvas.style.cursor = hoveredNode >= 0 ? 'pointer' : (isDragging ? 'grabbing' : 'grab');

      sorted.forEach((n) => {
        const i = projected.indexOf(n);
        const isHovered = hoveredNode === i;
        const depth = n.z;
        const alpha = Math.max(0.2, 1 - depth * 0.001) * Math.min(1, eased * 2);

        if (n.type === 'core') {
          for (let ring = 0; ring < 3; ring++) {
            const pulse = 1 + Math.sin(t * 2 + ring * 1.2) * 0.18;
            const rr = (16 + ring * 12) * n.scale * pulse;
            ctx.beginPath();
            ctx.arc(n.sx, n.sy, rr, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(192,57,43,${alpha * (0.5 - ring * 0.12)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
          const bloomG = ctx.createRadialGradient(n.sx, n.sy, 0, n.sx, n.sy, 36 * n.scale);
          bloomG.addColorStop(0, `rgba(192,57,43,${alpha * 0.4})`);
          bloomG.addColorStop(1, 'rgba(192,57,43,0)');
          ctx.fillStyle = bloomG;
          ctx.fillRect(n.sx - 40, n.sy - 40, 80, 80);
          ctx.beginPath();
          ctx.arc(n.sx, n.sy, 10 * n.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240,200,180,${alpha})`;
          ctx.shadowBlur = 25;
          ctx.shadowColor = 'rgba(192,57,43,1)';
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          const baseR =
            n.type === 'project' ? 8 :
            n.type === 'exp' ? 7 :
            n.type === 'ml' ? 6 :
            n.type === 'devops' ? 5 : 5;
          const r = baseR * n.scale * (isHovered ? 1.8 : 1);
          const nodeRGB =
            n.type === 'project' || n.type === 'exp' ? [201, 168, 76] :
            n.type === 'devops' ? [220, 120, 60] : [192, 57, 43];
          const bloom = ctx.createRadialGradient(n.sx, n.sy, 0, n.sx, n.sy, r * 4);
          bloom.addColorStop(0, `rgba(${nodeRGB[0]},${nodeRGB[1]},${nodeRGB[2]},${alpha * 0.2})`);
          bloom.addColorStop(1, `rgba(${nodeRGB[0]},${nodeRGB[1]},${nodeRGB[2]},0)`);
          ctx.fillStyle = bloom;
          ctx.fillRect(n.sx - r * 5, n.sy - r * 5, r * 10, r * 10);

          const color =
            n.type === 'project' ? `rgba(201,168,76,${alpha * (isHovered ? 1 : 0.9)})` :
            n.type === 'exp' ? `rgba(240,180,80,${alpha * (isHovered ? 1 : 0.85)})` :
            n.type === 'ml' ? `rgba(192,57,43,${alpha * (isHovered ? 1 : 0.85)})` :
            n.type === 'devops' ? `rgba(220,120,60,${alpha * (isHovered ? 1 : 0.8)})` :
            `rgba(192,57,43,${alpha * (isHovered ? 1 : 0.75)})`;

          ctx.beginPath();
          ctx.arc(n.sx, n.sy, r, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.shadowBlur = isHovered ? 20 : (n.scale > 0.9 ? 8 : 0);
          ctx.shadowColor =
            n.type === 'project' || n.type === 'exp' ? 'rgba(201,168,76,0.9)' :
            n.type === 'devops' ? 'rgba(220,120,60,0.9)' :
            'rgba(192,57,43,0.9)';
          ctx.fill();
          ctx.shadowBlur = 0;

          if (isHovered) {
            ctx.beginPath();
            ctx.arc(n.sx, n.sy, r + 6, 0, Math.PI * 2);
            ctx.strokeStyle =
              n.type === 'project' || n.type === 'exp' ? 'rgba(201,168,76,0.5)' :
              n.type === 'devops' ? 'rgba(220,120,60,0.5)' :
              'rgba(192,57,43,0.5)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          if (isHovered || n.scale > 0.88) {
            const labelAlpha = isHovered ? 1 : Math.min(1, (n.scale - 0.88) * 8) * alpha * 0.85;
            ctx.font = isHovered
              ? `bold ${Math.round(13 * n.scale)}px 'JetBrains Mono', monospace`
              : `${Math.round(10 * n.scale)}px 'JetBrains Mono', monospace`;
            ctx.textAlign = 'center';
            ctx.fillStyle =
              n.type === 'project' || n.type === 'exp' ? `rgba(201,168,76,${labelAlpha})` :
              n.type === 'devops' ? `rgba(220,120,60,${labelAlpha})` :
              n.type === 'ml' ? `rgba(220,100,80,${labelAlpha})` :
              `rgba(240,236,228,${labelAlpha * 0.8})`;
            ctx.fillText(n.label, n.sx, n.sy - r - 6);
          }
        }
      });

      for (let i = flashParticles.length - 1; i >= 0; i--) {
        const fp = flashParticles[i];
        fp.x += fp.vx; fp.y += fp.vy;
        fp.vx *= 0.92; fp.vy *= 0.92;
        fp.life++;
        const a = Math.max(0, 1 - fp.life / fp.maxLife);
        ctx.beginPath();
        ctx.arc(fp.x, fp.y, fp.r * a, 0, Math.PI * 2);
        ctx.fillStyle = fp.isGold ? `rgba(201,168,76,${a})` : `rgba(240,80,60,${a})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = fp.isGold ? 'rgba(201,168,76,0.8)' : 'rgba(192,57,43,0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
        if (fp.life >= fp.maxLife) flashParticles.splice(i, 1);
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <section id="constellation" aria-label="Interactive node graph">
      <canvas ref={canvasRef} className="constellation-canvas" />
    </section>
  );
}

export default Constellation;
