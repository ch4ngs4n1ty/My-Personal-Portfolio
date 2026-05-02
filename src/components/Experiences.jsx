import experiencesData from '../data/experiences.json';

function Experiences() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="experience">
      <div className="section-header reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>
      <div className="timeline">
        {experiencesData.map((exp) => (
          <article key={exp.id} className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{exp.duration}</div>
            <div className="timeline-role">
              {exp.logo && (
                <img
                  src={`${baseUrl}${exp.logo}`}
                  alt=""
                  className="timeline-logo"
                  aria-hidden="true"
                />
              )}
              {exp.url ? (
                <a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.title}</a>
              ) : (
                exp.title
              )}
            </div>
            <div className="timeline-company">{exp.company}</div>
            <div className="timeline-location">{exp.location}</div>
            <p className="timeline-desc">{exp.summary}</p>
            {exp.skills?.length > 0 && (
              <div className="timeline-skills">
                {exp.skills.map((skill) => (
                  <span key={skill} className="timeline-skill">{skill}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
