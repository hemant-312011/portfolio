import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { FeaturedProject } from "@/components/FeaturedProject";
import { AIShowcase } from "@/components/AIShowcase";
import { GithubSection } from "@/components/GithubSection";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <FeaturedProject />
        <AIShowcase />
        <GithubSection />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
