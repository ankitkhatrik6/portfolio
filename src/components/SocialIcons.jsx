import { Github, Instagram, Linkedin } from "lucide-react";
import { profile } from "../data/portfolio.js";

const icons = [
  {
    label: "GitHub",
    href: profile.social.github,
    icon: Github
  },
  {
    label: "Instagram",
    href: profile.social.instagram,
    icon: Instagram
  },
  {
    label: "LinkedIn",
    href: profile.social.linkedin,
    icon: Linkedin
  }
];

const SocialIcons = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {icons.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="group rounded-full border border-slate-200 bg-white/80 p-2 transition-all hover:-translate-y-1 hover:border-primary-400 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900"
        >
          <Icon className="h-5 w-5 text-slate-600 transition-colors group-hover:text-primary-500 dark:text-slate-300" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
