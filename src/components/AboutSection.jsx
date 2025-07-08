import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Building impactful web experiences as a Passionate Developer, with a keen focus on exploring and contributing to Generative AI development.
            </h3>

            <p className="text-muted-foreground">
              Possessing over a year of comprehensive experience in web development, I am proficient in creating responsive, accessible, and performant web applications with a focus on modern technological advancements.
            </p>

            <p className="text-muted-foreground">
             My passion lies in architecting elegant solutions for intricate challenges. I proactively master new technologies and techniques, constantly pushing the boundaries to stay at the forefront of web innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Reach Out
              </a>

              <a
                href="https://github.com/Yogendrasinghrathod/Resume/blob/main/Yogendra_singh_rathod_MERN_Developer.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building robust, cross-device compatible websites and web applications with proficiency in leading modern frameworks
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Guiding development initiatives from concept to deployment, leveraging agile methodologies to ensure adaptability and high-quality outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
