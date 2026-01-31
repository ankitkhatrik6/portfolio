import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { educationTimeline } from "../data/portfolio.js";

const Education = () => {
  return (
    <Section id="education">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic milestones presented in a vertical timeline.
          </p>
        </div>
        <div className="relative space-y-10 border-l border-slate-200 pl-6 dark:border-slate-800">
          {educationTimeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
            >
              <span className="absolute -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-primary-200 bg-primary-50 text-xs font-semibold text-primary-600 dark:border-primary-400/30 dark:bg-primary-500/20 dark:text-primary-200">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {item.institution}
              </p>
              <p className="mt-2 text-sm font-medium text-primary-500">
                {item.year}
              </p>
              {item.detail && (
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {item.detail}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
