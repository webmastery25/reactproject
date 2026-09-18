function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-row">

          <div className="hero-content">
            <span className="episode-badge">
              New Episode Available Now
            </span>

            <h1>
              Laugh, Learn,
              <br />
              Love, Live On
            </h1>

            <p>
              Listen to inspiring conversations, interesting stories
              and amazing podcast episodes.
            </p>

            <div className="hero-buttons">
              <a href="#" className="primary-btn">
                Latest Episode
              </a>

              <a href="#" className="secondary-btn">
                Subscribe
              </a>
            </div>
          </div>

          <div className="hero-image">
            <p>Podcast image will come here</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;