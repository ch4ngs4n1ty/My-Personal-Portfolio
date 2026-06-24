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

// Refined warm "ember" duotone — gold → amber → copper → crimson over deep black.
const COLORS = {
  core: [255, 241, 214],
  project: [214, 178, 92],
  exp: [226, 168, 80],
  ml: [226, 96, 72],
  skill: [198, 64, 48],
  devops: [206, 130, 70],
};

// What part of the portfolio each node represents (shown on hover/select).
const CATEGORY = {
  core: 'Portfolio Hub',
  project: 'Project',
  exp: 'Experience',
  skill: 'Language',
  ml: 'ML & Data',
  devops: 'DevOps & Tools',
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

    let W = 0, H = 0, dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const nodeData = buildNodes();
    const nonCoreCount = nodeData.length - 1;
    const sphere = fibSphere(nonCoreCount, 320);
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

    // Adjacency + cross-link lookup for hover-focus + edge styling.
    const adjacency = nodes.map(() => new Set());
    edges.forEach(([a, b]) => { adjacency[a].add(b); adjacency[b].add(a); });
    const key = (a, b) => (a < b ? `${a}-${b}` : `${b}-${a}`);
    const crossSet = new Set(crossLinks.map(([a, b]) => key(a, b)));

    const packets = edges.slice(0, 18).map(([a, b]) => ({
      from: a, to: b,
      t: Math.random(),
      speed: 0.003 + Math.random() * 0.005,
      isGold: nodes[b] && (nodes[b].type === 'project' || nodes[b].type === 'exp'),
    }));

    const dust = Array.from({ length: 150 }, () => ({
      x: (Math.random() - 0.5) * 1100,
      y: (Math.random() - 0.5) * 900,
      z: (Math.random() - 0.5) * 1100,
      r: Math.random() * 1.4 + 0.3,
      isGold: Math.random() < 0.22,
      tw: Math.random() * Math.PI * 2,
      sp: 0.4 + Math.random() * 1.6,
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
      for (let i = 0; i < 22; i++) {
        const angle = (i / 22) * Math.PI * 2 + Math.random() * 0.3;
        const speed = 1.6 + Math.random() * 3.4;
        flashParticles.push({
          x: sx, y: sy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0, maxLife: 32 + Math.random() * 22,
          r: Math.random() * 3 + 1,
          isGold,
        });
      }
    };

    const handleNodeClick = () => {
      if (didDrag || hoveredNode < 0) return;
      const node = nodes[hoveredNode];
      const proj = projected[hoveredNode];
      if (proj) spawnFlash(proj.sx, proj.sy, node.type === 'project' || node.type === 'exp');
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
      const fov = 560;
      const scale = fov / (fov + z2 + 340);
      return { sx: x1 * scale, sy: y1 * scale, z: z2, scale };
    };

    // ── Render helpers ────────────────────────────────────────────────
    const rgba = (c, a) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
    const lerp = (a, b, t2) => a + (b - a) * t2;
    const mix = (c, c2, t2) => [lerp(c[0], c2[0], t2), lerp(c[1], c2[1], t2), lerp(c[2], c2[2], t2)];
    const colorOf = (type) => COLORS[type] || COLORS.skill;
    const fogOf = (z) => Math.max(0.12, Math.min(1, 1 - (z + 300) / 680));
    const glow = (x, y, r, c, a) => {
      if (a <= 0 || r <= 0) return;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, rgba(c, a));
      g.addColorStop(1, rgba(c, 0));
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    };
    const spikes = (x, y, len, c, a) => {
      if (a <= 0) return;
      for (const ang of [0, Math.PI / 2]) {
        const dx = Math.cos(ang), dy = Math.sin(ang);
        const g = ctx.createLinearGradient(x - dx * len, y - dy * len, x + dx * len, y + dy * len);
        g.addColorStop(0, rgba(c, 0));
        g.addColorStop(0.5, rgba(c, a));
        g.addColorStop(1, rgba(c, 0));
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x - dx * len, y - dy * len);
        ctx.lineTo(x + dx * len, y + dy * len);
        ctx.stroke();
      }
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
        { r: 0, maxR: 520, alpha: 0.85, speed: 13, color: COLORS.skill },
        { r: 0, maxR: 400, alpha: 0.6, speed: 9, color: COLORS.project },
        { r: 0, maxR: 280, alpha: 0.5, speed: 5.5, color: COLORS.devops },
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

    const NODE_R = { project: 13, exp: 12, ml: 9, skill: 8.5, devops: 9 };

    let raf = 0;
    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.008;

      if (explodeActive && explodeProgress < 1) {
        explodeProgress += 0.018;
        if (explodeProgress >= 1) { explodeProgress = 1; explodeActive = false; }
      }
      const eased = explodeProgress < 1 ? 1 - Math.pow(1 - explodeProgress, 3) : 1;
      const appear = Math.min(1, eased * 2);

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

      // Hover hit-test up front so focus is current this frame.
      hoveredNode = -1;
      const rect = canvas.getBoundingClientRect();
      const lx = mouseX - rect.left, ly = mouseY - rect.top;
      let bestDist = Infinity;
      projected.forEach((n, i) => {
        const dx = lx - n.sx, dy = ly - n.sy;
        const d2 = dx * dx + dy * dy;
        const hitR = n.type === 'core'
          ? 46
          : Math.max(24, (NODE_R[n.type] || 8) * n.scale * 1.8 + 16);
        if (d2 < hitR * hitR && d2 < bestDist) { bestDist = d2; hoveredNode = i; }
      });
      canvas.style.cursor = hoveredNode >= 0 ? 'pointer' : (isDragging ? 'grabbing' : 'grab');
      const focus = hoveredNode;
      const focusActive = focus >= 0;

      const sorted = [...projected].sort((a, b) => b.z - a.z);

      // ── Additive light pass ──────────────────────────────────────
      ctx.globalCompositeOperation = 'lighter';

      // Drifting nebula — radii scaled to the canvas so the glow always fades
      // to zero before the edges (no hard rectangular clip).
      const neb = Math.min(W, H) * 0.46;
      glow(cx + Math.cos(t * 0.3) * 40, cy + Math.sin(t * 0.25) * 30, neb, COLORS.skill, 0.05);
      glow(cx + Math.cos(t * 0.2 + 2) * 50, cy + Math.sin(t * 0.3 + 1) * 40, neb * 0.78, COLORS.project, 0.045);
      glow(cx + Math.cos(t * 0.18 + 4) * 35, cy + Math.sin(t * 0.22 + 3) * 50, neb * 0.6, COLORS.devops, 0.03);

      // Parallax twinkling starfield
      dust.forEach((d) => {
        const p = project3D(d.x, d.y, d.z);
        const twk = 0.45 + 0.55 * Math.sin(t * d.sp + d.tw);
        const a = (0.06 + p.scale * 0.22) * twk * fogOf(p.z) * appear;
        const c = d.isGold ? COLORS.project : COLORS.skill;
        ctx.fillStyle = rgba(c, a);
        ctx.beginPath();
        ctx.arc(cx + p.sx, cy + p.sy, d.r * p.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Intro shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.r += sw.speed;
        sw.alpha *= 0.94;
        if (sw.r > sw.maxR || sw.alpha < 0.01) { shockwaves.splice(i, 1); continue; }
        const swFade = sw.alpha * (1 - sw.r / sw.maxR);
        ctx.beginPath();
        ctx.arc(cx, cy, sw.r, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(sw.color, swFade);
        ctx.lineWidth = 2.5 * (1 - sw.r / sw.maxR) + 0.5;
        ctx.stroke();
      }
      if (explodeProgress > 0 && explodeProgress < 0.32) {
        const flashA = ((0.32 - explodeProgress) / 0.32) * 0.8;
        glow(cx, cy, explodeProgress * 260, [255, 236, 200], flashA);
      }

      // Edges — depth-faded gradient filaments
      edges.forEach(([a, b]) => {
        const na = projected[a], nb = projected[b];
        const fog = fogOf((na.z + nb.z) / 2);
        const cross = crossSet.has(key(a, b));
        let alpha = (cross ? 0.22 : 0.14) * fog;
        let lw = (cross ? 0.7 : 0.55) * (0.6 + 0.6 * ((na.scale + nb.scale) / 2));
        let ca = colorOf(na.type), cb = colorOf(nb.type);
        if (focusActive) {
          if (a === focus || b === focus) { alpha *= 2.6; lw *= 1.7; ca = COLORS.project; cb = COLORS.core; }
          else { alpha *= 0.1; }
        }
        const g = ctx.createLinearGradient(na.sx, na.sy, nb.sx, nb.sy);
        g.addColorStop(0, rgba(ca, alpha));
        g.addColorStop(1, rgba(cb, alpha));
        ctx.strokeStyle = g;
        ctx.lineWidth = lw;
        ctx.beginPath();
        ctx.moveTo(na.sx, na.sy);
        ctx.lineTo(nb.sx, nb.sy);
        ctx.stroke();
      });

      // Energy packets — comet trails
      packets.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t -= 1;
        const from = nodes[p.from], to = nodes[p.to];
        const c = p.isGold ? COLORS.project : COLORS.ml;
        const dim = focusActive && !(p.from === focus || p.to === focus) ? 0.18 : 1;
        const SEG = 6;
        for (let k = SEG; k >= 0; k--) {
          const tt = p.t - k * 0.03;
          if (tt < 0) continue;
          const fx = from.x + (to.x - from.x) * tt;
          const fy = from.y + (to.y - from.y) * tt;
          const fz = from.z + (to.z - from.z) * tt;
          const pr = project3D(fx * eased, fy * eased, fz * eased);
          let a = (1 - k / SEG);
          a = a * a * (0.5 + 0.5 * pr.scale) * 0.85 * dim;
          const rr = (2.4 - k * 0.24) * pr.scale;
          if (rr <= 0 || a <= 0) continue;
          if (k === 0) glow(cx + pr.sx, cy + pr.sy, rr * 5, c, a * 0.5);
          ctx.fillStyle = rgba(k === 0 ? [255, 236, 205] : c, a);
          ctx.beginPath();
          ctx.arc(cx + pr.sx, cy + pr.sy, rr, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Nodes — stars (far → near)
      sorted.forEach((n) => {
        const i = projected.indexOf(n);
        const isHovered = focus === i;
        const fog = fogOf(n.z);
        let foc = 1;
        if (focusActive) foc = isHovered ? 1 : adjacency[focus].has(i) ? 0.95 : 0.16;
        const a = fog * appear * foc;
        const x = n.sx, y = n.sy, s = n.scale;

        if (n.type === 'core') {
          const pulse = 0.85 + 0.15 * Math.sin(t * 1.6);
          const hb = isHovered ? 1.18 : 1;
          glow(x, y, 104 * s * hb, COLORS.skill, a * 0.18 * pulse);
          glow(x, y, 66 * s * hb, COLORS.project, a * 0.22 * pulse);
          glow(x, y, 36 * s * hb, [255, 236, 206], a * 0.52 * pulse);
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(t * 0.15);
          spikes(0, 0, 116 * s * pulse * hb, [255, 236, 206], a * 0.5);
          ctx.rotate(Math.PI / 4);
          spikes(0, 0, 64 * s * pulse * hb, COLORS.project, a * 0.32);
          ctx.restore();
          // anamorphic horizontal flare
          const flw = 205 * s * hb, flh = 2.6;
          const fg = ctx.createLinearGradient(x - flw, y, x + flw, y);
          fg.addColorStop(0, rgba([255, 236, 206], 0));
          fg.addColorStop(0.5, rgba([255, 240, 212], a * 0.5));
          fg.addColorStop(1, rgba([255, 236, 206], 0));
          ctx.fillStyle = fg;
          ctx.fillRect(x - flw, y - flh, flw * 2, flh * 2);
          ctx.fillStyle = rgba([255, 247, 230], Math.min(1, a + 0.1));
          ctx.beginPath();
          ctx.arc(x, y, 12.5 * s * (isHovered ? 1.25 : 1), 0, Math.PI * 2);
          ctx.fill();
          return;
        }

        const c = colorOf(n.type);
        const r = (NODE_R[n.type] || 5) * s * (isHovered ? 1.85 : 1);
        glow(x, y, r * 5, c, a * 0.22 * (isHovered ? 1.7 : 1));
        glow(x, y, r * 1.7, c, a * 0.85);
        const bright = isHovered || ((n.type === 'project' || n.type === 'exp') && s > 0.95);
        if (bright) spikes(x, y, r * (isHovered ? 5 : 3.2), c, a * 0.7);
        ctx.fillStyle = rgba(mix(c, [255, 246, 224], 0.45), a);
        ctx.beginPath();
        ctx.arc(x, y, r * 0.6, 0, Math.PI * 2);
        ctx.fill();
        if (isHovered) {
          ctx.strokeStyle = rgba([255, 240, 212], Math.min(1, a * 0.6 + 0.35));
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(x, y, r + 10, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Flash particles
      for (let i = flashParticles.length - 1; i >= 0; i--) {
        const fp = flashParticles[i];
        fp.x += fp.vx; fp.y += fp.vy;
        fp.vx *= 0.92; fp.vy *= 0.92;
        fp.life++;
        const fa = Math.max(0, 1 - fp.life / fp.maxLife);
        const c = fp.isGold ? COLORS.project : COLORS.ml;
        glow(fp.x, fp.y, fp.r * 4 * fa, c, fa * 0.5);
        ctx.fillStyle = rgba([255, 238, 210], fa);
        ctx.beginPath();
        ctx.arc(fp.x, fp.y, fp.r * fa, 0, Math.PI * 2);
        ctx.fill();
        if (fp.life >= fp.maxLife) flashParticles.splice(i, 1);
      }

      // ── Text + vignette pass (normal blending) ───────────────────
      ctx.globalCompositeOperation = 'source-over';
      ctx.textAlign = 'center';

      // Ambient name labels for the nearest, non-focused nodes
      sorted.forEach((n) => {
        if (n.type === 'core') return;
        const i = projected.indexOf(n);
        if (focus === i) return;
        if (n.scale <= 0.92) return;
        const fog = fogOf(n.z);
        let foc = 1;
        if (focusActive) foc = adjacency[focus].has(i) ? 0.7 : 0.07;
        const la = Math.min(1, (n.scale - 0.92) * 9) * fog * 0.8 * foc;
        if (la <= 0.04) return;
        const c = colorOf(n.type);
        const r = (NODE_R[n.type] || 6) * n.scale;
        ctx.font = "400 10.5px 'JetBrains Mono', monospace";
        ctx.shadowColor = 'rgba(0,0,0,0.7)';
        ctx.shadowBlur = 8;
        ctx.fillStyle = rgba(mix(c, [246, 240, 228], 0.4), la);
        ctx.fillText(n.label, n.sx, n.sy - r - 12);
        ctx.shadowBlur = 0;
      });

      // Focused node — category kicker + name (the selected node's "card")
      if (focusActive) {
        const n = projected[focus];
        const c = colorOf(n.type);
        const r = n.type === 'core' ? 20 : (NODE_R[n.type] || 6) * n.scale * 1.85;
        const name = n.type === 'core' ? 'Ethan Chang' : n.label;
        const nameY = n.sy - r - 22;
        const catY = nameY - 17;
        ctx.strokeStyle = rgba(c, 0.6);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(n.sx, n.sy - r - 5);
        ctx.lineTo(n.sx, nameY + 6);
        ctx.stroke();
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 12;
        ctx.font = "600 9.5px 'JetBrains Mono', monospace";
        ctx.letterSpacing = '3px';
        ctx.fillStyle = rgba(mix(c, [255, 242, 218], 0.25), 0.95);
        ctx.fillText((CATEGORY[n.type] || '').toUpperCase(), n.sx, catY);
        ctx.letterSpacing = '0px';
        ctx.font = "600 14.5px 'JetBrains Mono', monospace";
        ctx.fillStyle = rgba([247, 241, 229], 1);
        ctx.fillText(name, n.sx, nameY);
        ctx.shadowBlur = 0;
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
