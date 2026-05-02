function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-text">© {year} <em>Ethan Chang</em> — All rights reserved</div>
      <div className="footer-text">RIT · Computer Science · <em>Class of 2026</em></div>
    </footer>
  );
}

export default Footer;
