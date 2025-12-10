import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-20 lg:right-4 z-[10000] p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaMoon className="text-gray-700 dark:text-yellow-400 text-xl" />
      ) : (
        <FaSun className="text-yellow-500 dark:text-yellow-400 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
