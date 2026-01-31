import { Code2, Palette, Server, TerminalSquare } from "lucide-react";
import Section from "../components/Section.jsx";
import { skills } from "../data/portfolio.js";

const iconMap = {
  Frontend: Code2,
  Styling: Palette,
  Backend: Server,
  Programming: TerminalSquare
};

const Skills = () => {
  return (
    <Section id="skills">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Tools, technologies, and programming languages.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => {
            const Icon = iconMap[group.category] || Code2;
            return (
              <div
                key={group.category}
                className="glass rounded-2xl p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-500/10 p-2 text-primary-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{group.category}</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
