// Line-art plates for the project collection. Each motif sketches what the
// project actually does, drawn on a shared 160×100 frame in crimson/gold so
// the archive reads as one set. Classes (g-*) are styled in App.css:
//   g-ink / g-red / g-gold  stroke colour     g-fill-*  solid marks
//   g-draw  strokes in on mount (needs pathLength="1")
//   g-pop   fades/scales in on mount          --d  stagger step
//   g-loop-*  idle-paused loops that run while the tile is hovered

const d = (n) => ({ '--d': n });

const GLYPHS = {
  // price series with a flagged dip and the recovery threshold
  dip: () => (
    <>
      <path className="g-ink g-dash" d="M10 38H150" />
      <path className="g-ink" d="M10 88H150M10 88V12" />
      <path
        className="g-gold g-draw"
        pathLength="1"
        d="M12 46 24 40 34 44 46 32 58 36 68 30 80 50 88 70 96 74 104 62 114 54 124 44 136 40 148 30"
      />
      <path className="g-red g-draw" pathLength="1" style={d(3)} d="M96 74V88" />
      <circle className="g-red g-pop g-loop-pulse" style={d(4)} cx="96" cy="74" r="4" />
      <circle className="g-fill-red g-pop" style={d(4)} cx="96" cy="74" r="1.6" />
      <text className="g-label g-pop" style={d(5)} x="104" y="84">−8.2%</text>
      <rect className="g-fill-gold g-loop-scan" x="10" y="12" width="1" height="76" />
    </>
  ),

  // three related tables with crow's-foot joins
  schema: () => (
    <>
      {[[14, 18], [62, 56], [110, 18]].map(([x, y], i) => (
        <g key={x} className="g-pop" style={d(i)}>
          <rect className={i === 1 ? 'g-red' : 'g-gold'} x={x} y={y} width="38" height="28" rx="1" />
          <path className="g-ink" d={`M${x} ${y + 9}h38M${x + 5} ${y + 15}h22M${x + 5} ${y + 21}h16`} />
        </g>
      ))}
      <path className="g-ink g-draw" pathLength="1" style={d(3)} d="M52 32H66V56M110 32H96V56" />
      <path className="g-red g-draw" pathLength="1" style={d(4)} d="M62 56l4-5 4 5M90 56l4-5 4 5" />
      <path className="g-gold g-dash g-loop-flow" d="M33 46V78H62M129 46V78H100" />
    </>
  ),

  // two peers, an encrypted channel and packets in flight
  secure: () => (
    <>
      <circle className="g-gold g-pop" cx="22" cy="50" r="10" />
      <circle className="g-gold g-pop" style={d(1)} cx="138" cy="50" r="10" />
      <path className="g-ink" d="M32 50H62M98 50H128" />
      <path className="g-red g-dash g-loop-flow" d="M32 44C60 24 100 24 128 44M128 56C100 76 60 76 32 56" />
      <g className="g-pop" style={d(2)}>
        <rect className="g-red" x="68" y="44" width="24" height="18" rx="2" />
        <path className="g-gold" d="M73 44v-5a7 7 0 0 1 14 0v5" />
        <circle className="g-fill-gold" cx="80" cy="53" r="2" />
      </g>
      <text className="g-label" x="10" y="80">TCP</text>
      <text className="g-label" x="132" y="80">UDP</text>
    </>
  ),

  // 21 hand landmarks — fingertips light up in turn
  hand: () => {
    const wrist = [52, 88];
    const fingers = [
      [[38, 76], [28, 66], [22, 56], [17, 48]],
      [[42, 58], [40, 44], [39, 34], [38, 25]],
      [[52, 56], [52, 40], [52, 29], [52, 18]],
      [[62, 58], [64, 44], [65, 34], [66, 26]],
      [[70, 62], [76, 52], [80, 45], [83, 38]],
    ];
    return (
      <>
        <path
          className="g-ink g-draw"
          pathLength="1"
          d={fingers.map((f) => `M${wrist}L${f.map((p) => p.join(' ')).join('L')}`).join('') + 'M42 58L52 56 62 58 70 62'}
        />
        <circle className="g-fill-gold g-pop" cx={wrist[0]} cy={wrist[1]} r="2" />
        {fingers.flatMap((f, fi) => f.map(([x, y], j) => (
          <circle
            key={`${fi}-${j}`}
            className={j === 3 ? 'g-fill-red g-pop g-loop-blink' : 'g-fill-gold g-pop'}
            style={{ ...d(fi + j * 0.5), '--b': fi }}
            cx={x}
            cy={y}
            r={j === 3 ? 2.4 : 1.6}
          />
        )))}
        <text className="g-big g-pop" style={d(5)} x="102" y="62">3+4</text>
        <path className="g-gold g-draw" pathLength="1" style={d(6)} d="M102 72H148" />
        <text className="g-big g-red-text g-pop" style={d(7)} x="140" y="90" textAnchor="end">7</text>
      </>
    );
  },

  // two thread lanes racing on one shared variable
  race: () => (
    <>
      <text className="g-label" x="8" y="31">T1</text>
      <text className="g-label" x="8" y="79">T2</text>
      <path className="g-ink" d="M24 28H152M24 76H152" />
      <rect className="g-gold g-pop g-loop-slide" x="30" y="21" width="34" height="14" />
      <rect className="g-gold g-pop g-loop-slide-alt" style={d(1)} x="40" y="69" width="34" height="14" />
      <rect className="g-red g-pop" style={d(2)} x="100" y="44" width="28" height="16" />
      <text className="g-label g-red-text" x="114" y="55" textAnchor="middle">x</text>
      <path className="g-gold g-draw" pathLength="1" style={d(3)} d="M64 35 100 48M74 69 100 56" />
      <path className="g-red g-draw" pathLength="1" style={d(5)} d="M136 44l8-8m0 8-8-8" />
    </>
  ),

  // cellular automaton: a fire front eating a forest grid
  fire: () => {
    const cells = [];
    for (let r = 0; r < 6; r += 1) {
      for (let c = 0; c < 12; c += 1) {
        const dist = Math.hypot(c - 3.5, (r - 2.5) * 1.3);
        const state = dist < 1.8 ? 'ash' : dist < 3.4 ? 'burn' : dist < 4.4 ? 'heat' : 'tree';
        cells.push({ r, c, state, dist });
      }
    }
    return cells.map(({ r, c, state, dist }) => (
      <rect
        key={`${r}-${c}`}
        className={`g-cell g-cell-${state} g-pop${state === 'burn' ? ' g-loop-flicker' : ''}`}
        style={{ ...d(dist * 0.6), '--b': (r + c) % 4 }}
        x={10 + c * 12}
        y={12 + r * 13}
        width="9"
        height="10"
      />
    ));
  },

  // grid search: walls, explored frontier, the A* path
  path: () => {
    const walls = [[4, 1], [4, 2], [4, 3], [4, 4], [8, 3], [8, 4], [8, 5], [8, 6], [8, 2]];
    const seen = [[1, 2], [2, 2], [2, 3], [3, 3], [2, 4], [3, 5], [1, 4], [5, 5], [6, 5], [6, 4], [7, 1], [9, 1]];
    const cell = (x, y) => [10 + x * 12, 8 + y * 12];
    return (
      <>
        {Array.from({ length: 7 }, (_, y) => Array.from({ length: 12 }, (_, x) => {
          const [px, py] = cell(x, y);
          return <circle key={`${x}-${y}`} className="g-fill-ink" cx={px + 6} cy={py + 6} r="0.7" />;
        }))}
        {seen.map(([x, y], i) => {
          const [px, py] = cell(x, y);
          return <rect key={`s${i}`} className="g-seen g-pop" style={d(i * 0.3)} x={px + 2.5} y={py + 2.5} width="7" height="7" />;
        })}
        {walls.map(([x, y]) => {
          const [px, py] = cell(x, y);
          return <rect key={`w${x}-${y}`} className="g-fill-wall" x={px + 1} y={py + 1} width="10" height="10" />;
        })}
        <path
          className="g-gold g-draw g-thick"
          pathLength="1"
          style={d(2)}
          d="M28 26V86H64V74H100V14H136V86"
        />
        <circle className="g-fill-gold g-pop" cx="28" cy="26" r="3" />
        <circle className="g-red g-pop g-loop-pulse" style={d(6)} cx="136" cy="86" r="4.5" />
      </>
    );
  },

  // puzzle board with pieces hopping over each other
  hop: () => (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <path key={i} className="g-ink" d={`M${30 + i * 25} 20V90M30 ${20 + i * 17.5}H130`} />
      ))}
      <circle className="g-gold g-pop" cx="42" cy="72" r="7" />
      <circle className="g-gold g-pop" style={d(1)} cx="92" cy="46" r="7" />
      <path className="g-red g-pop" style={d(2)} d="M117 23l6 10h-12z" />
      <circle className="g-fill-red g-pop g-loop-hop" style={d(3)} cx="67" cy="72" r="6" />
      <path className="g-gold g-dash g-draw" pathLength="1" style={d(4)} d="M67 64C70 34 98 26 117 38" />
      <path className="g-gold g-draw" pathLength="1" style={d(5)} d="M112 34l5 4-6 2" />
    </>
  ),

  // hawk/dove populations oscillating into a stable mix
  ess: () => (
    <>
      <path className="g-ink" d="M12 88H150M12 88V12" />
      <path className="g-ink g-dash" d="M12 50H150" />
      <path
        className="g-red g-draw"
        pathLength="1"
        d="M12 20C24 20 26 78 38 78S52 28 64 28 76 68 88 68 98 40 108 40 118 56 126 56 136 48 150 50"
      />
      <path
        className="g-gold g-draw"
        pathLength="1"
        style={d(2)}
        d="M12 80C24 80 26 22 38 22S52 72 64 72 76 32 88 32 98 60 108 60 118 44 126 44 136 52 150 50"
      />
      <circle className="g-fill-gold g-pop g-loop-pulse" style={d(6)} cx="150" cy="50" r="3" />
      <text className="g-label" x="18" y="98">t</text>
    </>
  ),

  // start lights + a reaction-time readout on a converging track
  racing: () => (
    <>
      <path className="g-ink" d="M10 94 66 34M150 94 94 34M80 94V34" />
      <path className="g-ink g-dash g-loop-flow" d="M45 94 73 34M115 94 87 34" />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          className="g-red g-pop g-loop-light"
          style={{ ...d(i), '--b': i }}
          cx={58 + i * 22}
          cy="16"
          r="6"
        />
      ))}
      <rect className="g-gold g-pop" style={d(3)} x="104" y="58" width="44" height="16" rx="1" />
      <text className="g-label g-gold-text" x="126" y="69" textAnchor="middle">0.214s</text>
    </>
  ),

  // operand stack consuming a postfix stream
  stack: () => (
    <>
      <text className="g-mono g-pop" x="10" y="22">3 4 + 2 ×</text>
      <path className="g-gold g-draw" pathLength="1" style={d(1)} d="M74 18H96l-4-4m4 4-4 4" />
      <path className="g-ink" d="M104 34V92H150V34" />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          className={`${i === 2 ? 'g-red g-loop-push' : 'g-gold'} g-pop`}
          style={d(2 + i)}
          x="109"
          y={76 - i * 18}
          width="36"
          height="13"
        />
      ))}
      <text className="g-label" x="127" y="86" textAnchor="middle">3</text>
      <text className="g-label" x="127" y="68" textAnchor="middle">4</text>
      <text className="g-label g-red-text" x="127" y="50" textAnchor="middle">+</text>
      <path className="g-ink" d="M14 40H86M14 54H70M14 68H78M14 82H58" />
    </>
  ),

  // decision tree with one highlighted cascade
  tree: () => {
    const nodes = [[80, 14], [44, 42], [116, 42], [24, 70], [62, 70], [100, 70], [136, 70], [52, 92], [72, 92]];
    const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [4, 7], [4, 8]];
    const hot = new Set(['0-1', '1-4', '4-8']);
    return (
      <>
        {edges.map(([a, b], i) => (
          <path
            key={`${a}-${b}`}
            className={`${hot.has(`${a}-${b}`) ? 'g-gold g-thick' : 'g-ink'} g-draw`}
            pathLength="1"
            style={d(i * 0.4)}
            d={`M${nodes[a]}L${nodes[b]}`}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            className={`${i === 8 ? 'g-fill-red g-loop-pulse' : [0, 1, 4].includes(i) ? 'g-fill-gold' : 'g-fill-ink'} g-pop`}
            style={d(i * 0.4)}
            cx={x}
            cy={y}
            r={i === 8 ? 4 : 3}
          />
        ))}
      </>
    );
  },

  // three clusters, centroids, and the principal axes
  cluster: () => {
    const groups = [
      { c: [44, 34], cls: 'g-fill-gold', pts: [[-10, -6], [-4, 8], [6, -10], [10, 4], [-14, 4], [2, 2], [-2, -12], [12, -4]] },
      { c: [112, 40], cls: 'g-fill-red', pts: [[-8, -8], [8, 6], [-12, 6], [4, -12], [12, -2], [-2, 10], [0, -2]] },
      { c: [74, 74], cls: 'g-fill-ink', pts: [[-12, 2], [10, -6], [-4, 8], [6, 10], [-8, -8], [14, 4], [2, -2]] },
    ];
    return (
      <>
        <path className="g-ink g-dash g-draw" pathLength="1" d="M14 88 148 18" />
        <path className="g-ink g-dash g-draw" pathLength="1" style={d(1)} d="M58 12 96 96" />
        {groups.map((g, gi) => (
          <g key={gi} className="g-loop-breathe" style={{ '--b': gi }}>
            {g.pts.map(([dx, dy], i) => (
              <circle key={i} className={`${g.cls} g-pop`} style={d(gi + i * 0.2)} cx={g.c[0] + dx} cy={g.c[1] + dy} r="1.9" />
            ))}
            <path className="g-gold g-thick g-pop" style={d(gi + 2)} d={`M${g.c[0] - 4} ${g.c[1] - 4}l8 8m0-8-8 8`} />
          </g>
        ))}
      </>
    );
  },

  // class histograms split by a single learned threshold
  threshold: () => {
    const a = [6, 14, 26, 38, 30, 18, 9, 4, 2, 0, 0];
    const b = [0, 0, 1, 4, 10, 20, 32, 40, 28, 14, 6];
    return (
      <>
        <path className="g-ink" d="M10 88H150" />
        {a.map((h, i) => (
          <rect key={`a${i}`} className="g-bar g-bar-gold g-grow" style={d(i * 0.25)} x={14 + i * 12} y={88 - h * 1.6} width="5" height={h * 1.6} />
        ))}
        {b.map((h, i) => (
          <rect key={`b${i}`} className="g-bar g-bar-red g-grow" style={d(i * 0.25 + 1)} x={20 + i * 12} y={88 - h * 1.6} width="5" height={h * 1.6} />
        ))}
        <g className="g-loop-sweep">
          <path className="g-gold g-thick g-draw" pathLength="1" style={d(4)} d="M84 6V92" />
          <text className="g-label g-gold-text g-pop" style={d(5)} x="88" y="14">x ≥ t</text>
        </g>
      </>
    );
  },
};

// unknown motif: a small constellation seeded from the title
function scatter(seed, count) {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const rnd = () => ((h = (h * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  return Array.from({ length: count }, () => [16 + rnd() * 128, 14 + rnd() * 72]);
}

function Constellation({ seed = '' }) {
  const pts = scatter(seed, 9);
  return (
    <>
      <path className="g-ink g-draw" pathLength="1" d={`M${pts.map((p) => p.join(' ')).join('L')}`} />
      {pts.map(([x, y], i) => (
        <circle key={i} className={`${i % 3 ? 'g-fill-gold' : 'g-fill-red'} g-pop`} style={d(i * 0.4)} cx={x} cy={y} r="2" />
      ))}
    </>
  );
}

function ProjectGlyph({ glyph, seed, className = '' }) {
  const Motif = GLYPHS[glyph];
  return (
    <svg
      className={`glyph ${className}`}
      viewBox="0 0 160 100"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      {Motif ? <Motif /> : <Constellation seed={seed} />}
    </svg>
  );
}

export default ProjectGlyph;
