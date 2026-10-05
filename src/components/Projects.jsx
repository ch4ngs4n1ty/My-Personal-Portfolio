import { useState } from 'react';
import projectsData from '../data/projects.json';
import ImageModal from './ImageModal';
import ProjectInsights from './ProjectInsights';
import SectionHeader from './SectionHeader';

// Preserve the curated order; secondary work is discovered by discipline.
const FEATURED_COUNT = 3;
const COLLECTIONS = [
  { id: 'apps', label: 'Apps & APIs', projects: [4, 5] },
  { id: 'data', label: 'Data & ML', projects: [13, 15, 16, 17] },
  { id: 'systems', label: 'Systems & algorithms', projects: [12, 6, 8, 14] },
  { id: 'simulations', label: 'Games & simulations', projects: [7, 9, 10, 11] },
];

// Small decorative symbols keep the category names as the accessible labels.
function CollectionIcon({ category }) {
  const paths = {
    apps: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01M9 12l-3 2.5L9 17m6-5 3 2.5-3 2.5" /></>,
    data: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
    systems: <><rect x="7" y="7" width="10" height="10" rx="1" /><path d="M10 3v4m4-4v4M10 17v4m4-4v4M3 10h4m-4 4h4m10-4h4m-4 4h4M10 10h4v4h-4z" /></>,
    simulations: <><path d="M7 7h10c2 0 3 2 3.5 4l1 6c.4 2-1.5 3-3 1.5L16 16H8l-2.5 2.5C4 20 2.1 19 2.5 17l1-6C4 9 5 7 7 7Z" /><path d="M6 11v4m-2-2h4m7-2h.01m3 3h.01" /></>,
  };
  return (
    <svg className="project-category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[category]}
    </svg>
  );
}

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
  const baseUrl = import.meta.env.BASE_URL;
  const num = String(index + 1).padStart(2, '0');
  const open = () => state.setShowInsights(true);

  return (
    <>
      <article
        className="project-tile"
        style={{ '--idx': index }}
        role="button"
        tabIndex={0}
        aria-label={`View insights for ${project.title}`}
        onClick={open}
        onKeyDown={openKeys(open)}
      >
        {project.backgroundImage && (
          <img
            className="project-tile-image"
            src={`${baseUrl}${project.backgroundImage.replace(/^\//, '')}`}
            alt=""
            loading="lazy"
            decoding="async"
          />
        )}
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
  const [collection, setCollection] = useState(COLLECTIONS[0].id);
  const featured = projectsData.slice(0, FEATURED_COUNT);
  const rest = projectsData.slice(FEATURED_COUNT);
  const collections = COLLECTIONS.map((group) => ({
    ...group,
    items: rest.filter((project) => group.projects.includes(project.id)
      || (group.id === 'apps' && !COLLECTIONS.some((entry) => entry.projects.includes(project.id)))),
  })).filter((group) => group.items.length > 0);
  const active = collections.find((group) => group.id === collection) || collections[0];

  return (
    <section id="projects">
      <SectionHeader num="03" title="Projects" kicker="// What I've built" />

      <div className="projects-grid">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {rest.length > 0 && (
        <details className="projects-collection">
          <summary className="projects-collection-toggle">
            <span className="projects-collection-copy">
              <span className="projects-more-label">Beyond the highlights</span>
              <span className="projects-collection-title">Project collection <span>{rest.length}</span></span>
              <span className="projects-collection-hint">Apps, experiments, and the ideas in between. Explore by interest.</span>
            </span>
            <span className="projects-collection-icon" aria-hidden="true" />
          </summary>
          <div className="projects-collection-body">
            <div className="projects-filters" role="group" aria-label="Browse projects by interest">
              {collections.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  aria-pressed={active.id === group.id}
                  aria-controls="project-collection-results"
                  onClick={() => setCollection(group.id)}
                >
                  <CollectionIcon category={group.id} />
                  <span className="project-category-label">{group.label}</span>
                  <span className="project-category-count">{group.items.length}</span>
                </button>
              ))}
            </div>
            <p className="projects-collection-status" role="status">
              {active.label} · {active.items.length} projects
            </p>
            <div className="projects-tiles" id="project-collection-results" role="region" aria-label={active.label}>
              {active.items.map((project) => (
                <ProjectTile
                  key={project.id}
                  project={project}
                  index={projectsData.findIndex((item) => item.id === project.id)}
                />
              ))}
            </div>
          </div>
        </details>
      )}
    </section>
  );
}

export default Projects;
