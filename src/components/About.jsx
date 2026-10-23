import projectsData from '../data/projects.json';
import toolsData from '../data/tools.json';

const STATS = (projects, tools) => [
  { num: '4', suffix: 'th', label: 'Year, B.S. CS' },
  { num: String(projects), label: 'Projects' },
  { num: String(tools), label: 'Tools & Tech' },
  { num: '3.6', label: 'GPA' },
];

function About() {
  const stats = STATS(projectsData.length, toolsData.length);

  return (
    <section id="about">
      <div className="about-stats reveal">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-num">
              {s.num}{s.suffix && <span>{s.suffix}</span>}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <article className="about-panel reveal">
        <div className="about-watermark" aria-hidden="true">01</div>
        <div className="about-edge" aria-hidden="true" />
        <div className="about-panel-inner">
          <div className="about-section-label">
            <span className="about-gem" aria-hidden="true"></span>About Me
          </div>
          <h2 className="about-heading">
            I build with<br /><em>data &amp; code</em>
          </h2>
          <div className="about-body">
            <p className="about-lead">
              I'm a <strong>fourth-year Computer Science student</strong> at the{' '}
              <strong>Rochester Institute of Technology</strong>. Most of my recent work has been in{' '}
              <em>data science, machine learning, and AI</em>, including predicting surgery outcomes at the
              University of Pittsburgh's AIBIDS program. I'm also an R&amp;D intern at Sandia National Laboratories,
              where I built a training tool that simulates data from hypothetical radioactive material releases.
            </p>
            <p>
              I graduate in May 2027 and I'm looking for a full-time role in <em>software engineering, data, or
              AI</em>. Before Sandia, I tutored programming at RIT's NTID Learning Center, using bilingual
              communication to work with a diverse group of students.
            </p>
          </div>
          <div className="about-focus">
            <span className="about-focus-label">Focus</span>
            <div className="about-focus-tags">
              {['Software Engineering', 'Data Science', 'Machine Learning', 'Artificial Intelligence'].map((t) => (
                <span className="about-focus-tag" key={t}>
                  <span className="about-focus-gem" aria-hidden="true"></span>
                  <span>{t}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
