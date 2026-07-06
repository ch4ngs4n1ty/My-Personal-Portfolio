// Shared chapter divider — diamond emblem, kicker, title, layered rule, ghost numeral
function SectionHeader({ num, title, kicker }) {
  return (
    <div className="section-header reveal">
      <span className="section-num">{num}</span>
      <div className="section-heading">
        {kicker && <span className="section-kicker">{kicker}</span>}
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-line"></div>
      <span className="section-ghost" aria-hidden="true">{num}</span>
    </div>
  );
}

export default SectionHeader;
