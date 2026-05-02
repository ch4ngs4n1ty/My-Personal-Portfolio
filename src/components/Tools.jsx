import toolsData from '../data/tools.json';

function ToolItem({ tool }) {
  const baseUrl = import.meta.env.BASE_URL;

  const inner = (
    <>
      <img
        src={`${baseUrl}${tool.logo}`}
        alt=""
        className="tool-image"
        aria-hidden="true"
      />
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
      >
        {inner}
      </a>
    );
  }
  return <div className="tool-item reveal">{inner}</div>;
}

function Tools() {
  return (
    <section id="tools">
      <div className="section-header reveal">
        <span className="section-num">04</span>
        <h2 className="section-title">Tech Stack</h2>
        <div className="section-line"></div>
      </div>
      <div className="tools-grid">
        {toolsData.map((tool) => (
          <ToolItem key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}

export default Tools;
