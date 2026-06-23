function Clients() {
  const industries = [
    "Pharmaceutical Industry",
    "Healthcare",
    "Technology",
    "Manufacturing",
    "Energy & Utilities",
    "Media & Events",
    "Education",
    "Retail & E-Commerce"
  ];

  return (
    <section className="clients">
      <p className="client-tag">INDUSTRIES WE SERVE</p>

      <h2>Trusted Across Multiple Industries</h2>

      <div className="client-logos">
        {industries.map((industry, index) => (
          <div className="industry-card" key={index}>
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;