import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import Section from "../components/Section.jsx";
import SocialIcons from "../components/SocialIcons.jsx";
import { profile } from "../data/portfolio.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    const subject = `New Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const mailtoLink = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations or opportunities.
          </p>
          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-600 transition hover:border-primary-300 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
            >
              <Mail className="h-5 w-5 text-primary-500" />
              <span>{profile.contact.email}</span>
            </a>
            <a
              href={`tel:${profile.contact.phone}`}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-600 transition hover:border-primary-300 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
            >
              <Phone className="h-5 w-5 text-primary-500" />
              <span>{profile.contact.phone}</span>
            </a>
            <SocialIcons className="pt-2" />
          </div>
        </div>
        <div className="glass rounded-3xl p-6 shadow-lg">
          <h3 className="text-base font-semibold">Send a message</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Fill the form and submit to compose an email.
          </p>
          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:border-slate-800 dark:bg-slate-900 dark:focus:border-primary-500"
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:border-slate-800 dark:bg-slate-900 dark:focus:border-primary-500"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:border-slate-800 dark:bg-slate-900 dark:focus:border-primary-500"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
