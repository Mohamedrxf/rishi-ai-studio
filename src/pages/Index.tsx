import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Achievements from "@/components/Achievements";
import Clubs from "@/components/Clubs";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Achievements />
        <Clubs />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
