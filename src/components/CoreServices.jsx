const services = [
  {
    title: "Branding",
    desc: "Build strong brands that connect with your audience."
  },
  {
    title: "Web Development",
    desc: "Modern responsive websites built for growth."
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media and performance campaigns."
  },
  {
    title: "Event Promotion",
    desc: "Promote events through targeted marketing."
  }
];

function CoreServices() {
  return (
    <section className="services">
      <p className="section-small">WHAT WE DO</p>

      <h2>Our Core Services</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <button>LEARN MORE →</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreServices;