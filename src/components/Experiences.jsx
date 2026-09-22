import { useEffect, useRef } from 'react';
import experiencesData from '../data/experiences.json';
import SectionHeader from './SectionHeader';

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
      <SectionHeader num="02" title="Experience" kicker="// Where I've worked" />
      <div className="timeline" ref={timelineRef}>
        {experiencesData.map((exp, i) => (
          <article
            key={exp.id}
            className="timeline-item reveal"
            style={{ '--i': i }}
          >
            <div className="timeline-card">
              {/* header band: logo + identity on the left, dates on the right */}
              <header className="timeline-head">
                {exp.logo && (
                  <span className="timeline-logo-frame" aria-hidden="true">
                    <img src={`${baseUrl}${exp.logo}`} alt="" className="timeline-logo" />
                  </span>
                )}

                <div className="timeline-identity">
                  <h3 className="timeline-role">
                    {exp.url ? (
                      <a href={exp.url} target="_blank" rel="noopener noreferrer">
                        {exp.title}
                        <span className="timeline-arrow" aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      exp.title
                    )}
                  </h3>
                  <div className="timeline-company">{exp.company}</div>
                </div>

                <div className="timeline-when">
                  <span className="timeline-date">{exp.duration}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
              </header>

              <div className="timeline-body">
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
        ))}
      </div>
    </section>
  );
}

export default Experiences;
