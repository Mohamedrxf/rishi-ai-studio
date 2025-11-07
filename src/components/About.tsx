import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text">
            About Me
          </h2>
          
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Seeking a challenging and innovative position in software or web development that utilizes my education and helps me grow technically while contributing to an organization's success. Passionate about secure web applications, problem-solving, and learning modern technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
