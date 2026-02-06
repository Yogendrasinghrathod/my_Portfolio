import { lazy, Suspense } from "react";

import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";

/* Lazy-loaded sections */
const StarBackground = lazy(() =>
  import("@/components/StarBackground")
);
const AboutSection = lazy(() =>
  import("../components/AboutSection")
);
const SkillsSection = lazy(() =>
  import("../components/SkillsSection")
);
const ProjectsSection = lazy(() =>
  import("../components/ProjectsSection")
);
const ContactSection = lazy(() =>
  import("../components/ContactSection")
);
const Footer = lazy(() =>
  import("../components/Footer")
);

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Navbar />

      <main>
        <HeroSection />

        <Suspense fallback={null}>
          <StarBackground />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};
