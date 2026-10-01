const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website built with Next.js and modern web technologies.",
    technologies: "Next.js • React • CSS",
  },
  {
    title: "Student Management System",
    description:
      "A web application designed to organize student information and academic records.",
    technologies: "JavaScript • React • Database",
  },
  {
    title: "Creative Gallery",
    description:
      "A visual gallery showcasing creative projects, designs, and digital artwork.",
    technologies: "HTML • CSS • JavaScript",
  },
];

export default function Portfolio() {
  return (
    <main>
      <section className="portfolio-section">
        <p className="section-label">MY WORK</p>

        <h1>Portfolio</h1>

        <p className="section-description">
          Here are some of the projects I have worked on.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-icon">💻</div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <span>{project.technologies}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}