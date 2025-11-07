import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Telemedicine Access Platform for Rural Healthcare",
    event: "Smart India Hackathon 2025",
    description:
      "Developed a multilingual telemedicine app enabling video consultations and offline health records (IndexedDB + PWA). Built a hybrid USSD + IVR emergency support system for feature phones, increasing healthcare access by 40%.",
    tech: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "Supabase", "Flask", "TensorFlow"],
    impact: "40% increase in healthcare access",
  },
  {
    title: "AI-Powered Symptom Analysis and Disease Prediction System",
    event: "Machine Learning Project",
    description:
      "Created a synthetic dataset generator for patient symptom–disease records using Keras and CSV pipelines. Developed a multi-label ML model with scikit-learn and Pandas to predict diseases with 95% accuracy.",
    tech: ["Python", "TensorFlow", "Keras", "Scikit-Learn", "Pandas", "NumPy"],
    impact: "95% prediction accuracy",
  },
  {
    title: "Problem Solving Achievements",
    event: "Competitive Programming",
    description:
      "Solved 250+ LeetCode problems focusing on algorithms and data structures. Completed 50+ HackerRank problems in Python & C++. Solved 400+ CodeChef problems focusing on fundamentals.",
    tech: ["Python", "C++", "Java", "Algorithms", "Data Structures"],
    impact: "700+ problems solved",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Featured Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group hover:glow-cyan"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm font-medium">{project.event}</p>
                  </div>
                  <div className="text-secondary font-semibold text-lg">{project.impact}</div>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-primary/10 border border-primary/20 rounded-full text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
