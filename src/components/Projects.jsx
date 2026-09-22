import { useState } from 'react';
import projectsData from '../data/projects.json';
import ImageModal from './ImageModal';
import ProjectInsights from './ProjectInsights';
import SectionHeader from './SectionHeader';

// the first few get full split cards; the rest collapse into a compact grid
const FEATURED_COUNT = 5;

// first sentence only — the full write-up lives in the Insights panel
function lede(text = '') {
  const cut = text.match(/^(.*?[.!?])\s/);
  return cut ? cut[1] : text;
}

function useInsights() {
  const [showInsights, setShowInsights] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  return { showInsights, setShowInsights, selectedImage, setSelectedImage };
}

// shared modal pair, so featured cards and compact tiles behave identically
function InsightsPortal({ project, index, state }) {
  const baseUrl = import.meta.env.BASE_URL;
  const { showInsights, setShowInsights, selectedImage, setSelectedImage } = state;
  return (
    <>
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
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
}

function openKeys(open) {
  return (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  };
}

function ProjectCard({ project, index }) {
  const state = useInsights();
  const baseUrl = import.meta.env.BASE_URL;

  const num = String(index + 1).padStart(2, '0');
  const open = () => state.setShowInsights(true);
  const hasArt = Boolean(project.backgroundImage);

  return (
    <>
      <article
        className={`project-card reveal${hasArt ? '' : ' no-art'}`}
        style={{ '--idx': index }}
        role="button"
        tabIndex={0}
        aria-label={`View insights for ${project.title}`}
        onClick={open}
        onKeyDown={openKeys(open)}
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

      <InsightsPortal project={project} index={index} state={state} />
    </>
  );
}

// compact tile for the secondary work — scannable, still opens Insights
function ProjectTile({ project, index }) {
  const state = useInsights();
  const num = String(index + 1).padStart(2, '0');
  const open = () => state.setShowInsights(true);

  return (
    <>
      <article
        className="project-tile reveal"
        style={{ '--idx': index }}
        role="button"
        tabIndex={0}
        aria-label={`View insights for ${project.title}`}
        onClick={open}
        onKeyDown={openKeys(open)}
      >
        <div className="project-tile-top">
          <span className="project-tile-num">{num}</span>
          <span className="project-tile-arrow" aria-hidden="true">→</span>
        </div>
        <h3 className="project-tile-title">{project.title}</h3>
        <div className="project-tile-meta">{project.duration}</div>
        <div className="project-tile-tags">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="project-tile-tag">{t}</span>
          ))}
        </div>
      </article>

      <InsightsPortal project={project} index={index} state={state} />
    </>
  );
}

function Projects() {
  const featured = projectsData.slice(0, FEATURED_COUNT);
  const rest = projectsData.slice(FEATURED_COUNT);

  return (
    <section id="projects">
      <SectionHeader num="03" title="Projects" kicker="// What I've built" />

      <div className="projects-grid">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {rest.length > 0 && (
        <>
          <div className="projects-more-head reveal">
            <span className="projects-more-label">More work</span>
            <span className="projects-more-rule" aria-hidden="true" />
            <span className="projects-more-count">{rest.length} projects</span>
          </div>

          <div className="projects-tiles">
            {rest.map((project, i) => (
              <ProjectTile
                key={project.id}
                project={project}
                index={FEATURED_COUNT + i}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Projects;
