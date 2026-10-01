const galleryItems = [
  {
    emoji: "🎨",
    title: "Creative Design",
    description: "Exploring colors, layouts, and visual design.",
  },
  {
    emoji: "💻",
    title: "Web Development",
    description: "Building modern and responsive websites.",
  },
  {
    emoji: "📱",
    title: "UI Design",
    description: "Creating clean and user-friendly interfaces.",
  },
  {
    emoji: "🚀",
    title: "New Ideas",
    description: "Turning ideas into creative digital projects.",
  },
  {
    emoji: "📸",
    title: "Photography",
    description: "Capturing interesting moments and perspectives.",
  },
  {
    emoji: "✨",
    title: "Creative Work",
    description: "A collection of personal creative projects.",
  },
];

export default function Gallery() {
  return (
    <main>
      <section className="gallery-section">
        <p className="section-label">MY CREATIVE SPACE</p>

        <h1>Gallery</h1>

        <p className="section-description">
          A collection of creative work, designs, and ideas.
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.title}>
              <div className="gallery-image">{item.emoji}</div>

              <div className="gallery-info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}