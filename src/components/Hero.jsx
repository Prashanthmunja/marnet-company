import heroBg from "../assets/hero-bg.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(8,43,99,0.75),
            rgba(8,43,99,0.75)
          ),
          url(${heroBg})
        `,
      }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          A B2B Media,
          <br />
          Marketing &
          <br />
          Technology Company
        </h1>

        <p>
          Empowering businesses with branding,
          digital solutions and technology services.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;