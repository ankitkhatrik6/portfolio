import { ArrowRight, Download } from "lucide-react";
import Section from "../components/Section.jsx";
import SocialIcons from "../components/SocialIcons.jsx";
import { profile } from "../data/portfolio.js";

const Hero = () => {
  return (
    <Section id="home" className="pt-24">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">
            {profile.role}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Hi, I'm {profile.name}
          </h1>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 md:text-lg">
            {profile.education}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-primary-600"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://drive.google.com/file/d/1HrHwYK0ClMGh8JySNhcg3hc9MENvCgDV/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8">
            <SocialIcons />
          </div>
        </div>
        <div className="glass rounded-3xl p-6 shadow-lg">
          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-900/90 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                Focus Areas
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {profile.interests.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-6 text-sm text-slate-600 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">
                Building delightful digital experiences
              </p>
              <p className="mt-2">
                I focus on crafting clean UI, scalable front-end architecture, and
                thoughtful user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
