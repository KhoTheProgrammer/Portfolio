import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: FiGithub, href: "https://github.com/KhoTheProgrammer", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/kondwani-padyera-9a511a26b", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/265980636311", label: "WhatsApp" },
  { icon: FaFacebook, href: "https://web.facebook.com/profile.php?id=100084319704616", label: "Facebook" },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-ink-2">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <button
          onClick={scrollTop}
          className="flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 text-white">
            K
          </span>
          Kondwani Padyera
        </button>

        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition-all hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Kondwani Padyera. Built with React &amp; Tailwind.</p>
          <button onClick={scrollTop} className="inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-300">
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
