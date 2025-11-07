import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";

const Clubs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clubs" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Clubs & Societies
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:glow-purple"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Asterix Club</h3>
                <p className="text-primary text-lg font-medium mb-4">Treasurer</p>
              </div>
            </div>

            <div className="space-y-4 text-foreground/80">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="leading-relaxed">
                  Managed financial planning and budgeting for all club activities, ensuring transparent and efficient resource allocation
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                <p className="leading-relaxed">
                  Organized a successful low-code hackathon promoting student innovation and technical skill development
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <p className="leading-relaxed">
                  Collaborated with team members to plan and execute engaging technical events and workshops for the student community
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clubs;
