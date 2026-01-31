import { Briefcase } from "lucide-react";
import Section from "../components/Section.jsx";
import { experience } from "../data/portfolio.js";

const Experience = () => {
  return (
    <Section id="experience">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="section-title">Experience & Achievements</h2>
          <p className="section-subtitle">
            Highlights of hands-on work and personal growth.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {experience.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary-500/10 p-2 text-primary-500">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
