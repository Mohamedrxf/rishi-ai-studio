import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ShelfScape",
    event: "Personal Project",
    description:
      "Built a virtual reading platform for tracking and discovering books, motivating users to read more. Features include book tracking, reading goals, personalized recommendations, and community engagement.",
    tech: ["ReactJS", "Node.js", "MongoDB", "CSS"],
    impact: "Enhanced reading habits",
  },
  {
    title: "WhatsApp Message Automation (Geo-location Based)",
    event: "Automation Project",
    description:
      "Developed a system that automates personalized WhatsApp messages based on user location for timely engagement. Integrated geolocation APIs for real-time tracking and message triggering.",
    tech: ["Python", "Flask", "Twilio API", "Geolocation API"],
    impact: "Improved user engagement",
  },
  {
    title: "AI-based Recipe Recommendation System",
    event: "Machine Learning Project",
    description:
      "Built an AI web app suggesting recipes based on available ingredients, personalizing user cooking experiences. Implemented NLP for ingredient parsing and collaborative filtering for recommendations.",
    tech: ["Python", "Flask", "TensorFlow", "ReactJS"],
    impact: "Personalized cooking experience",
  },
  {
    title: "Student Mark Prediction System",
    event: "Data Science Project",
    description:
      "Implemented an ML model predicting student marks using data from daily routines for performance analysis and personalized recommendations. Used regression models and feature engineering.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    impact: "Accurate performance prediction",
  },
  {
    title: "Problem Solving Achievements",
    event: "Competitive Programming",
    description:
      "Solved 350+ LeetCode problems and 50+ HackerRank problems focusing on algorithms and data structures. Passionate about optimizing solutions for performance and readability.",
    tech: ["Python", "C++", "Java", "Algorithms", "Data Structures"],
    impact: "400+ problems solved",
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
                className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group hover:glow-purple"
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
