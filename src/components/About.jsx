import projectsData from '../data/projects.json';
import toolsData from '../data/tools.json';

function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div>
          <div className="about-number reveal">01</div>
          <div className="about-section-label reveal">About Me</div>
          <h2 className="about-heading reveal">
            Building at the<br />edge of <em>data &amp; code</em>
          </h2>
          <div className="about-body reveal">
            <p>
              I'm a <strong>Computer Science student at Rochester Institute of Technology</strong> drawn to the intersection of
              data science, machine learning, and real-world software. I enjoy turning messy, raw data into systems that
              actually do something.
            </p>
            <p>
              Whether I'm tutoring algorithms in ASL, building predictive models for clinical research, or shipping
              full-stack apps with a team — I bring the same precision to every problem.
            </p>
          </div>
        </div>
        <div>
          <div className="about-stats">
            <div className="stat-item reveal">
              <div className="stat-num">2<span>+</span></div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-num">{projectsData.length}</div>
              <div className="stat-label">Projects Shipped</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-num">{toolsData.length}</div>
              <div className="stat-label">Tools &amp; Tech</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-num">∞</div>
              <div className="stat-label">Problems Solved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
