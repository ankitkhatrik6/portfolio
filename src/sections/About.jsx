import Section from "../components/Section.jsx";
import { profile } from "../data/portfolio.js";

const About = () => {
  return (
    <Section id="about">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="glass rounded-3xl p-6 shadow-lg">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Developer-focused profile and current academic journey.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            I am {profile.name}, an {profile.role}. Currently, I am a
            {" "}
            {profile.education}. I enjoy building full stack applications and
            learning modern technologies that deliver real-world impact.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-500">
              Core Interests
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-primary-200/60 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 dark:border-primary-500/20 dark:bg-primary-500/10 dark:text-primary-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Focus
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Building responsive front-end experiences, strengthening backend
              fundamentals, and exploring AI/ML and cyber security pathways.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
