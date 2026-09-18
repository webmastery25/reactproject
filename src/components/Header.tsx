function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <a href="#" className="logo">
            🎙 Podcastio
          </a>

          {/* Category */}
          <button className="category-btn">☰ Category ↓</button>

          {/* Navigation */}
          <nav className="main-nav">
            <a href="#">Home</a>
            <a href="#">Episode</a>
            <a href="#">Blog</a>
            <a href="#">Pages</a>
          </nav>

          {/* Right Side */}
          <div className="header-actions">
            <div className="search-box">
              <input type="text" placeholder="Search Episode..." />
            </div>

            <a href="#" className="login-btn">
              Login
            </a>

            <a href="#" className="register-btn">
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
