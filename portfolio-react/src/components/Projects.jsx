import { useState } from 'react';
import projectsData from '../data/projects.json';
import ImageModal from './ImageModal';

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (e) => {
    // Don't toggle if clicking on links or details
    if (e.target.closest('.project-link') || e.target.closest('.project-details')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div 
        className={`project-card ${isExpanded ? 'expanded' : ''}`}
        style={{ backgroundImage: `url(${project.backgroundImage})` }}
      >
        <div className="project-overlay" onClick={handleCardClick}>
          <div className="project-preview">
            <h3>{project.title}</h3>
            <p className="click-hint">Click to view details</p>
          </div>
          
          <div className="project-details-content">
            <p className="project-duration">
              {project.duration}
              {project.program && ` • ${project.program}`}
            </p>
            <p className="project-description">{project.description}</p>
            <p className="project-tools">
              <strong>Tools:</strong> {project.tools.join(', ')}
            </p>
            <div className="project-links">
              {project.githubUrl ? (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub
                </a>
              ) : (
                <button 
                  className="project-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert('Project repository coming soon!');
                  }}
                >
                  View Details
                </button>
              )}
            </div>
          </div>
        </div>

        {project.artifacts && project.artifacts.length > 0 && (
          <details className="project-details">
            <summary>View Artifacts</summary>
            <div className="project-artifacts">
              {project.artifacts.map((artifact, index) => (
                artifact.type === 'image' ? (
                  <img 
                    key={index}
                    src={artifact.src} 
                    alt={artifact.alt} 
                    className="artifact-image"
                    onClick={() => setSelectedImage(artifact)}
                  />
                ) : (
                  <button key={index} className="artifact-link">
                    {artifact.name}
                  </button>
                )
              ))}
            </div>
          </details>
        )}
      </div>

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
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

