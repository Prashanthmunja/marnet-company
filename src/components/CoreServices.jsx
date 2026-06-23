function CoreServices() {
  const services = [
    {
      image: "/images/branding.jpg",
      title: "Branding & Creative",
      desc: "Build a powerful brand identity that creates trust, recognition and long-term value."
    },
    {
      image: "/images/webdevelopment.jpg",
      title: "Web Development",
      desc: "We build modern, responsive and SEO-friendly websites that deliver exceptional performance."
    },
    {
      image: "/images/digitalmarketing.jpg",
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies that increase visibility and generate leads."
    },
    {
      image: "/images/events.jpg",
      title: "Event & Media Promotion",
      desc: "Promote your events, products and brand through our industry media network."
    }
  ];

  return (
    <section className="services">
      <p className="service-tag">OUR SERVICES</p>

      <h2 className="section-title">
        Solutions Designed for Modern Businesses
      </h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <button className="learn-btn">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreServices;