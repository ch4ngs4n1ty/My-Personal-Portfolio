import toolsData from '../data/tools.json';

function ToolCard({ tool }) {
  const content = (
    <>
      <img src={tool.logo} alt={`${tool.name} logo`} className="tool-image" />
      <p className="tool-name">{tool.name}</p>
    </>
  );

  return (
    <div className="tool-card">
      {tool.url ? (
        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-link">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function Tools() {
  return (
    <div className="tools-section">
      <h2>Tools & Technologies</h2>
      <div className="tools-grid">
        {toolsData.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default Tools;

