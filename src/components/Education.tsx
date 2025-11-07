import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "SRM Easwari Engineering College",
    year: "Expected May 2027",
    grade: "CGPA: 9.25",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "High School",
    year: "2023",
    grade: "94%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Secondary School",
    year: "2021",
    grade: "95%",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-6 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background glow-purple" />

                  <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span>{edu.year}</span>
                          <span className="text-secondary font-semibold">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
