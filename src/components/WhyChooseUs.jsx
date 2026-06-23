function WhyChooseUs() {
  const points = [
    "Industry-Focused Expertise",
    "End-to-End Solutions",
    "Results-Driven Approach",
    "Global Reach",
    "Dedicated Support",
    "Growth-Oriented Strategy"
  ];

  return (
    <section className="why-us">
      <div className="why-left">
        <h2>Your Partner for Digital Growth</h2>

        <p>
          We combine creativity, technology and industry expertise
          to deliver solutions that generate measurable business results.
        </p>

        <button>Know More About Us</button>
      </div>

      <div className="why-right">
        {points.map((item, index) => (
          <div className="feature" key={index}>
            ✓ {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;