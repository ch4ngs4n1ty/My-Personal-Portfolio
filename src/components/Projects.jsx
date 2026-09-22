import { useState } from 'react';
import projectsData from '../data/projects.json';
import ImageModal from './ImageModal';
import ProjectInsights from './ProjectInsights';
import SectionHeader from './SectionHeader';

// first sentence only — the full write-up lives in the Insights panel
function lede(text = '') {
  const cut = text.match(/^(.*?[.!?])\s/);
  return cut ? cut[1] : text;
}

function ProjectCard({ project, index }) {
  const [showInsights, setShowInsights] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const baseUrl = import.meta.env.BASE_URL;

  const num = String(index + 1).padStart(2, '0');
  const openInsights = () => setShowInsights(true);
  const hasArt = Boolean(project.backgroundImage);

  return (
    <>
      <article
        className={`project-card reveal${hasArt ? '' : ' no-art'}`}
        style={{ '--idx': index }}
        role="button"
        tabIndex={0}
        aria-label={`View insights for ${project.title}`}
        onClick={openInsights}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openInsights();
          }
        }}
      >
        {/* ── visual half ── */}
        <div className="project-visual" aria-hidden="true">
          {hasArt ? (
            <div
              className="project-img"
              style={{ backgroundImage: `url(${baseUrl}${project.backgroundImage.replace(/^\//, '')})` }}
            />
          ) : (
            // no artwork: build a panel from the stack instead of leaving a hole
            <div className="project-fallback">
              <span className="project-fallback-num">{num}</span>
              <span className="project-fallback-stack">
                {(project.tools || project.tech).slice(0, 5).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
            </div>
          )}
          <span className="project-visual-veil" />
        </div>

        {/* ── content half ── */}
        <div className="project-content">
          <div className="project-index">
            <span className="project-num">{num}</span>
            <span className="project-index-rule" aria-hidden="true" />
          </div>

          <h3 className="project-title">{project.title}</h3>

          <div className="project-meta">
            {project.duration}
            {project.program && ` · ${project.program}`}
          </div>

          <p className="project-desc">{lede(project.description)}</p>

          <div className="project-tags">
            {project.tech.map((t) => (
              <span key={t} className="project-tag">{t}</span>
            ))}
          </div>

          <span className="project-cue">
            View insights
            <span className="project-cue-arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </article>

      {showInsights && (
        <ProjectInsights
          project={project}
          index={index}
          baseUrl={baseUrl}
          onViewArtifact={setSelectedImage}
          onClose={() => setShowInsights(false)}
        />
      )}

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

function Projects() {
  return (
    <section id="projects">
      <SectionHeader num="03" title="Projects" kicker="// What I've built" />
      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
