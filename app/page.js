export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="section-label">WELCOME TO MY WEBSITE</p>

        <h1>
          Hi, I'm <span>Franchezca</span>
        </h1>

        <h2>Student • Designer • Web Developer</h2>

        <p className="hero-description">
          Welcome to my personal portfolio. This website showcases my
          projects, creative work, skills, and interests in web development
          and design.
        </p>

        <div className="hero-buttons">
          <a href="/portfolio" className="primary-button">
            View My Work
          </a>

          <a href="/about" className="secondary-button">
            About Me
          </a>
        </div>
      </section>

      <section className="highlights">
        <div className="highlight-card">
          <div className="highlight-icon">💻</div>
          <h3>Web Development</h3>
          <p>
            Building modern and responsive websites using current web
            technologies.
          </p>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">🎨</div>
          <h3>Creative Design</h3>
          <p>
            Exploring creative layouts, visual design, and user-friendly
            interfaces.
          </p>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">🚀</div>
          <h3>Learning & Growth</h3>
          <p>
            Continuously learning new skills and turning ideas into useful
            digital projects.
          </p>
        </div>
      </section>
    </main>
  );
}