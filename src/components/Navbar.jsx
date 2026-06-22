function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-section">
        <h2 className="logo">MARNET</h2>
        <span className="logo-subtitle">
          PRIVATE LIMITED
        </span>
      </div>

      <nav>
        <ul className="nav-links">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>MEDIA NETWORK</li>
          <li>PRODUCTS</li>
          <li>EVENTS</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      <button className="contact-btn">
        GET IN TOUCH
      </button>
    </header>
  );
}

export default Navbar;