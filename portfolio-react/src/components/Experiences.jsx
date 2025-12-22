import experiencesData from '../data/experiences.json';

function ExperienceCard({ experience }) {
  return (
    <div className="experience-card">
      <h3>{experience.title}</h3>
      <p className="company">{experience.company}</p>

      {experience.url ? (
        <a href={experience.url} target="_blank" rel="noopener noreferrer" className="experience-logo-link">
          <div className="experience-logo">
            <img src={experience.logo} alt={`${experience.company} logo`} />
          </div>
        </a>
      ) : (
        <div className="experience-logo">
          <img src={experience.logo} alt={`${experience.company} logo`} />
        </div>
      )}

      <p className="duration">{experience.duration} • {experience.location}</p>
      
      <p className="experience-summary">{experience.summary}</p>
      
      <p className="experience-skills">
        <strong>Skills:</strong> {experience.skills.join(', ')}
      </p>
    </div>
  );
}

function Experiences() {
  return (
    <div className="experiences-section">
      <h2>Experiences</h2>
      <div className="experience-container">
        {experiencesData.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Experiences;

