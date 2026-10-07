import { useEffect, useState } from 'react';

const SECTIONS = [
  // secondary links drop out on phones to keep the bar to one line
  { id: 'about', label: 'About', secondary: true },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools', secondary: true },
  { id: 'contact', label: 'Contact' },
];

function Navigation() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      let current = '';
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo" aria-label="Back to top">
        <span className="nav-mark">EC</span>
        <span className="nav-wordmark">Ethan Chang</span>
      </a>
      <ul className="nav-links">
        {SECTIONS.map(({ id, label, secondary }) => (
          <li key={id} className={secondary ? 'nav-secondary' : undefined}>
            <a href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
