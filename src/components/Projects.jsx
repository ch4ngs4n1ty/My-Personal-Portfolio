import { useState } from 'react';
import projectsData from '../data/projects.json';
import ImageModal from './ImageModal';

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const baseUrl = import.meta.env.BASE_URL;

  const num = String(index + 1).padStart(2, '0');
  const validArtifacts = (project.artifacts || []).filter(
    (a) => a && a.type === 'image' && a.src
  );

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <>
      <article className={`project-card reveal${isExpanded ? ' expanded' : ''}`}>
        <div className="project-bg" aria-hidden="true" />
        <div className="project-stripe" aria-hidden="true" />
        <div className="project-watermark" aria-hidden="true">{num}</div>
        <div className="project-edge" aria-hidden="true" />
        <div
          className="project-content"
          role="button"
          tabIndex={0}
          onClick={() => setIsExpanded((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsExpanded((v) => !v);
            }
          }}
        >
          <div className="project-num">{num}</div>
          <h3 className="project-title">{project.title}</h3>
          <div className="project-meta">
            {project.duration}
            {project.program && ` · ${project.program}`}
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="project-tags">
            {project.tech.map((t) => (
              <span key={t} className="project-tag">{t}</span>
            ))}
          </div>
          <div className="project-actions" onClick={stopPropagation}>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action"
              >
                View on GitHub →
              </a>
            ) : (
              <span className="project-action" style={{ opacity: 0.6 }}>
                Repo private
              </span>
            )}
            {validArtifacts.length > 0 && (
              <button
                type="button"
                className="project-action"
                onClick={() =>
                  setSelectedImage({
                    ...validArtifacts[0],
                    src: `${baseUrl}${validArtifacts[0].src}`,
                  })
                }
              >
                View Artifact
              </button>
            )}
          </div>
          {validArtifacts.length > 0 && (
            <div className="project-artifacts" onClick={stopPropagation}>
              {validArtifacts.map((art, i) => (
                <img
                  key={i}
                  src={`${baseUrl}${art.src}`}
                  alt={art.alt}
                  className="artifact-thumb"
                  onClick={() =>
                    setSelectedImage({ ...art, src: `${baseUrl}${art.src}` })
                  }
                />
              ))}
            </div>
          )}
        </div>
        <div className="project-arrow" aria-hidden="true">→</div>
      </article>

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
      <div className="section-header reveal">
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
