import experiencesData from '../data/experiences.json';

function ExperienceCard({ experience, index, isLast }) {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <div className="experience-item">
      <div className="experience-card">
        {experience.url ? (
          <a href={experience.url} target="_blank" rel="noopener noreferrer" className="experience-logo-link">
            <div className="experience-logo">
              <img src={`${baseUrl}${experience.logo}`} alt={`${experience.company} logo`} />
            </div>
          </a>
        ) : (
          <div className="experience-logo">
            <img src={`${baseUrl}${experience.logo}`} alt={`${experience.company} logo`} />
          </div>
        )}
        
        <h3>{experience.title}</h3>
        <p className="company">{experience.company}</p>
        <p className="duration">{experience.duration} • {experience.location}</p>
        
        <p className="experience-summary">{experience.summary}</p>
        
        <p className="experience-skills">
          <strong>Skills:</strong> {experience.skills.join(', ')}
        </p>
      </div>
      {!isLast && <div className="experience-connector"></div>}
    </div>
  );
}

function Experiences() {
  return (
    <div className="experiences-section">
      <h2>Experiences</h2>
      <div className="experience-container">
        {experiencesData.map((experience, index) => (
          <ExperienceCard 
            key={experience.id} 
            experience={experience} 
            index={index}
            isLast={index === experiencesData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;

