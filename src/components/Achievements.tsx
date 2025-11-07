import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Target } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "2nd Place – Ethical Hacking CTF Hackathon",
    level: "Supraja Technologies",
    description: "Recognized for outstanding problem-solving and cybersecurity awareness in a competitive Capture The Flag event.",
    color: "text-primary",
  },
];

const certifications = [
  "HTML & CSS Basics – Udemy",
  "C++ Programming – Infosys Springboard",
  "Microsoft Gen AI – Microsoft",
  "Python Essentials – Cisco Networking Academy",
  "Introduction to Cybersecurity – Cisco Networking Academy",
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Achievements & Recognition
          </h2>

          <div className="grid grid-cols-1 gap-8 mb-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-purple"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-primary rounded-lg ${achievement.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                      <p className="text-primary text-sm font-medium mb-3">{achievement.level}</p>
                      <p className="text-foreground/80">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-foreground/90">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
