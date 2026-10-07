import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import WorkInProgress from './WorkInProgress';

function ProjectInsights({ project, index, baseUrl, onViewArtifact, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const num = String(index + 1).padStart(2, '0');
  const insights = project.insights || {};
  const metrics = (insights.metrics || []).filter(
    (metric) => metric && metric.value != null && String(metric.value).trim()
      && String(metric.value).trim() !== '—' && metric.label?.trim()
  );
  const highlights = (insights.highlights || []).filter((highlight) => highlight?.trim());
  const overview = insights.summary?.trim() || project.description?.trim();
  const stack = project.tools?.length > 0 ? project.tools : project.tech;
  const validArtifacts = (project.artifacts || []).filter(
    (a) => a && a.type === 'image' && a.src
  );

  const onBackdrop = (e) => e.target === e.currentTarget && onClose();

  return createPortal(
    <div className="insights-overlay" onClick={onBackdrop}>
      <div
        className="insights-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} insights`}
      >
        <button className="insights-close" onClick={onClose} aria-label="Close insights">
          ×
        </button>
        <div className="insights-watermark" aria-hidden="true">{num}</div>

        <header className="insights-head">
          <span className="insights-eyebrow">Project {num}</span>
          <h2 className="insights-title">{project.title}</h2>
          <div className="insights-meta">
            {project.duration}
            {project.program && ` · ${project.program}`}
          </div>
        </header>

        <div className="insights-body">
          <section className="insights-section">
            <h3 className="insights-label">Overview</h3>
            {overview ? (
              <p className="insights-text">{overview}</p>
            ) : (
              <WorkInProgress title="Overview in progress" detail="This project’s introduction hasn’t been documented yet." />
            )}
          </section>

          {metrics.length === 0 && highlights.length === 0 ? (
            <section className="insights-section" aria-label="Project documentation status">
              <WorkInProgress />
            </section>
          ) : (
            <>
              <section className="insights-section">
                <h3 className="insights-label">Insights</h3>
                {metrics.length > 0 ? (
                  <div className="insights-metrics">
                    {metrics.map((metric, i) => (
                      <div className="insight-metric" key={i}>
                        <div className="insight-metric-value">{metric.value}</div>
                        <div className="insight-metric-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <WorkInProgress title="Insights in progress" detail="Project metrics haven’t been documented yet." />
                )}
              </section>
              <section className="insights-section">
                <h3 className="insights-label">Highlights</h3>
                {highlights.length > 0 ? (
                  <ul className="insights-list">
                    {highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                  </ul>
                ) : (
                  <WorkInProgress title="Highlights in progress" detail="Outcomes and learnings haven’t been documented yet." />
                )}
              </section>
            </>
          )}

          <section className="insights-section">
            <h3 className="insights-label">Tech &amp; Tools</h3>
            <div className="insights-chips">
              {stack.map((t) => (
                <span className="insights-chip" key={t}>{t}</span>
              ))}
            </div>
          </section>

          {validArtifacts.length > 0 && (
            <section className="insights-section">
              <h3 className="insights-label">Artifacts</h3>
              <div className="insights-artifacts">
                {validArtifacts.map((art, i) => (
                  <img
                    key={i}
                    src={`${baseUrl}${art.src}`}
                    alt={art.alt}
                    className="insights-artifact"
                    onClick={() =>
                      onViewArtifact({ ...art, src: `${baseUrl}${art.src}` })
                    }
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        <footer className="insights-foot">
          {project.githubUrl ? (
            <a
              className="insights-action"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          ) : (
            <span className="insights-action is-disabled">Repository private</span>
          )}
        </footer>
      </div>
    </div>,
    document.body
  );
}

export default ProjectInsights;
