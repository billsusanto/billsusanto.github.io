import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`w-full flex flex-col mb-8 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <p className="text-accent-foreground font-medium text-sm uppercase tracking-wider mb-1">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
        <div className="mt-2 h-1 w-20 bg-[hsl(var(--accent-teal))]" />
      </motion.div>
    </div>
  );
};

export default SectionHeader;
