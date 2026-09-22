import toolsData from '../data/tools.json';
import SectionHeader from './SectionHeader';

function ToolItem({ tool, index }) {
  const baseUrl = import.meta.env.BASE_URL;

  const inner = (
    <>
      <span className="tool-glyph" aria-hidden="true">
        {tool.logo ? (
          <img
            className="tool-logo"
            src={`${baseUrl}${tool.logo.replace(/^\//, '')}`}
            alt=""
            loading="lazy"
          />
        ) : (
          <span className="tool-mono">{tool.name.charAt(0)}</span>
        )}
      </span>
      <span className="tool-name">{tool.name}</span>
    </>
  );

  if (tool.url) {
    return (
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="tool-item reveal"
        style={{ '--idx': index }}
      >
        {inner}
      </a>
    );
  }
  return <div className="tool-item reveal" style={{ '--idx': index }}>{inner}</div>;
}

function Tools() {
  return (
    <section id="tools">
      <SectionHeader num="04" title="Tech Stack" kicker="// What I work with" />
      <div className="tools-grid">
        {toolsData.map((tool, i) => (
          <ToolItem key={tool.id} tool={tool} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Tools;
