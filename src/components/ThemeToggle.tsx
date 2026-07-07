import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="grid h-10 w-10 place-items-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="text-lg" />
      ) : (
        <FiSun className="text-lg text-amber-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
