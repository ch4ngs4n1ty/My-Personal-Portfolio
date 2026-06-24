import projectsData from '../data/projects.json';
import toolsData from '../data/tools.json';

const STATS = (projects, tools) => [
  { num: '4', suffix: 'th', label: 'Year, B.S. CS' },
  { num: String(projects), label: 'Projects Shipped' },
  { num: String(tools), label: 'Tools & Tech' },
  { num: '∞', label: 'Problems Solved' },
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
          <div className="about-section-label">About Me</div>
          <h2 className="about-heading">
            Building at the<br />edge of <em>data &amp; code</em>
          </h2>
          <div className="about-body">
            <p>
              I'm a <strong>Computer Science major in my fourth year at the Rochester Institute of Technology</strong>,
              working toward my bachelor's degree. What started as plain curiosity about how software works has grown into
              a real passion for <strong>data science, machine learning, and AI</strong>. Those are the parts of computing
              where raw, messy data turns into something that can predict, reason, and genuinely help people.
            </p>
            <p>
              My goal is to become a <strong>well-rounded engineer</strong> who's equally at home training a model,
              shipping a full-stack app, or explaining a tricky algorithm in ASL. I care less about any single tool and
              more about understanding a problem deeply and building things that actually hold up in the real world.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
