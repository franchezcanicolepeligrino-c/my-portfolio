export default function About() {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Next.js",
    "UI/UX Design",
    "Responsive Design",
  ];

  return (
    <main>
      <section className="about-section">
        <p className="section-label">GET TO KNOW ME</p>

        <h1>About Me</h1>

        <p className="section-description">
          A little more about who I am, what I do, and what I enjoy learning.
        </p>

        <div className="about-content">
          <div className="about-card">
            <div className="about-icon">👩‍💻</div>

            <h2>Hello!</h2>

            <p>
              I'm Franchezca, a student who enjoys learning about technology,
              web development, and creative design.
            </p>

            <p>
              I enjoy creating websites that are simple, responsive, and
              enjoyable to use. I'm continuously improving my skills by
              building projects and exploring new technologies.
            </p>

            <p>
              My goal is to keep learning, create meaningful projects, and
              grow as a web developer and designer.
            </p>
          </div>

          <div className="skills-card">
            <h2>My Skills</h2>

            <div className="skills-list">
              {skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}