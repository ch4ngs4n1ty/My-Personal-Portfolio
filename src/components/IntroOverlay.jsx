import { useEffect, useState } from 'react';

function IntroOverlay({ onComplete }) {
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLine1(true), 200);
    const t2 = setTimeout(() => setShowLine2(true), 500);
    const t3 = setTimeout(() => setShowBar(true), 600);
    const t4 = setTimeout(() => setShowLine3(true), 800);
    const t5 = setTimeout(() => setHidden(true), 2400);
    const t6 = setTimeout(() => onComplete?.(), 3200);
    return () => {
      [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`intro-overlay${hidden ? ' hidden' : ''}`}>
      <div className="intro-inner">
        <div className={`intro-line1${showLine1 ? ' show' : ''}`}>ETHAN CHANG</div>
        <div className={`intro-line2${showLine2 ? ' show' : ''}`}>Computer Science · RIT</div>
        <div className={`intro-bar${showBar ? ' show' : ''}`}></div>
        <div className={`intro-line3${showLine3 ? ' show' : ''}`}>Initializing portfolio…</div>
      </div>
    </div>
  );
}

export default IntroOverlay;
