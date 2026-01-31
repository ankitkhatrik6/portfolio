import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "../components/Section.jsx";
import { projects } from "../data/portfolio.js";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Selected work and practical implementations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-300 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-primary-500" />
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
