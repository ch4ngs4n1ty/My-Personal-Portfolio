import { useEffect, useRef } from 'react';
import experiencesData from '../data/experiences.json';
import SectionHeader from './SectionHeader';

// one header row: logo plate · title + company · dates + location
function RoleRow({ exp, logo, title, current, duration, location, muted }) {
  return (
    <div className={`timeline-row${muted ? ' is-past' : ''}`}>
      {logo && (
        <span className="timeline-logo-frame" aria-hidden="true">
          <img src={logo} alt="" className="timeline-logo" />
        </span>
      )}

      <div className="timeline-identity">
        <h3 className="timeline-role">
          {exp.url ? (
            <a href={exp.url} target="_blank" rel="noopener noreferrer">
              {title}
              <span className="timeline-arrow" aria-hidden="true">↗</span>
            </a>
          ) : (
            title
          )}
          {current && (
            <span className="timeline-current">
              <span className="timeline-current-dot" aria-hidden="true" />
              Current
            </span>
          )}
        </h3>
        <div className="timeline-company">{exp.company}</div>
      </div>

      <div className="timeline-when">
        <span className="timeline-date">{duration}</span>
        <span className="timeline-location">{location}</span>
      </div>
    </div>
  );
}

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
            className={`timeline-item reveal${exp.current ? ' is-current' : ''}`}
            style={{ '--i': i }}
          >
            <div className="timeline-card">
              {/* header band: logo + identity on the left, dates on the right.
                  Multiple roles at one employer stack as full rows joined by a rail. */}
              {exp.roles?.length > 0 ? (
                <header className="timeline-head is-chain">
                  {exp.roles.map((role, r) => (
                    <div key={role.title + role.duration} className="timeline-chain-step">
                      {r > 0 && (
                        <div className="timeline-chain-link" aria-hidden="true">
                          <span>{exp.roles[r - 1].transition}</span>
                        </div>
                      )}
                      <RoleRow
                        exp={exp}
                        logo={baseUrl + exp.logo}
                        title={role.title}
                        current={role.current}
                        duration={role.duration}
                        location={[role.location, role.type].filter(Boolean).join(' · ')}
                        muted={!role.current}
                      />
                    </div>
                  ))}
                </header>
              ) : (
                <header className="timeline-head">
                  <RoleRow
                    exp={exp}
                    logo={exp.logo && baseUrl + exp.logo}
                    title={exp.title}
                    current={exp.current}
                    duration={exp.duration}
                    location={exp.location}
                  />
                </header>
              )}

              <div className="timeline-body">
                <p className="timeline-desc">{exp.summary}</p>

                {exp.highlights?.length > 0 && (
                  <ul className="timeline-highlights">
                    {exp.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                )}

                {exp.award && (
                  <div className="timeline-award">
                    <span className="timeline-award-mark" aria-hidden="true">✦</span>
                    <div>
                      <div className="timeline-award-name">{exp.award.name}</div>
                      <div className="timeline-award-detail">{exp.award.detail}</div>
                    </div>
                  </div>
                )}

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
