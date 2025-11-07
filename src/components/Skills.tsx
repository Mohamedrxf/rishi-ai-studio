import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Database, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "C++", "C", "Java", "JavaScript", "SQL", "Flask"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["ReactJS", "Node.js"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Google Colab", "Git", "GitHub", "Postman"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Team Building", "Communication", "Time Management"],
  },
  {
    title: "Languages",
    icon: Users,
    skills: ["English", "Tamil", "Telugu", "Hindi"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-purple"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
