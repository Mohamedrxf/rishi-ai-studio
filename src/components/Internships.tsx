import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const internships = [
  {
    title: "Cybersecurity and Ethical Hacking Intern",
    company: "Supraja Technologies",
    duration: "Recent",
    description: [
      "Hands-on experience with OSINT tools for information gathering and reconnaissance",
      "Conducted vulnerability assessment and penetration testing on web applications",
      "Learned digital forensics techniques and incident response procedures",
      "Participated in security audits and compliance reviews",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Realtekh Software Services",
    duration: "Recent",
    description: [
      "Worked with the MERN stack to build secure, scalable web applications",
      "Developed RESTful APIs and integrated third-party services",
      "Learned real-world deployment practices and CI/CD pipelines",
      "Collaborated with cross-functional teams on client projects",
    ],
  },
];

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Internship Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-purple"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{internship.title}</h3>
                    <p className="text-primary font-medium">{internship.company}</p>
                    <p className="text-sm text-muted-foreground">{internship.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {internship.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
