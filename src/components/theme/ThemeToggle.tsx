"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={toggleTheme}
      className={`p-2 h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer duration-300 ${className}`}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <MoonIcon className="h-full w-full text-slate-600 dark:text-slate-400" />
      ) : (
        <SunIcon className="h-full w-full text-slate-600 dark:text-slate-400" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
