import { motion } from "framer-motion";

const Section = ({ id, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`scroll-mt-24 py-16 md:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
