import { useEffect, useRef } from 'react';
import experiencesData from '../data/experiences.json';

function Experiences() {
  const baseUrl = import.meta.env.BASE_URL;
  const timelineRef = useRef(null);

  // light up each experience as it passes through the centre of the viewport
  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    if (!items?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('active', entry.isIntersecting);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className="section-header reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>
      <div className="timeline" ref={timelineRef}>
        {experiencesData.map((exp, i) => {
          const year = exp.duration?.match(/\b(?:19|20)\d{2}\b/)?.[0];
          return (
          <article
            key={exp.id}
            className="timeline-item reveal"
            style={{ '--i': i }}
          >
            {year && (
              <span className="timeline-year" aria-hidden="true">{year}</span>
            )}
            <div className="timeline-card">
              <div className="timeline-card-inner">
                <span className="timeline-date">{exp.duration}</span>
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
                    <a href={exp.url} target="_blank" rel="noopener noreferrer">
                      {exp.title}
                      <span className="timeline-arrow" aria-hidden="true">↗</span>
                    </a>
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
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}

export default Experiences;
