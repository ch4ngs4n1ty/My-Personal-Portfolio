import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools' },
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
      <a href="#hero" className="nav-logo">EC<span>.</span></a>
      <ul className="nav-links">
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
