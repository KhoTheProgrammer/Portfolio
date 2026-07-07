import { FiMapPin, FiMail, FiPhone, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  id: string;
}

const details = [
  { icon: FiMapPin, label: "Location", value: "Lilongwe, Malawi" },
  { icon: FiMail, label: "Email", value: "kondwanipadyera@gmail.com", href: "mailto:kondwanipadyera@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+265 980 636 311", href: "tel:+265980636311" },
];

const socials = [
  { icon: FiGithub, href: "https://github.com/KhoTheProgrammer", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/kondwani-padyera-9a511a26b", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/265980636311", label: "WhatsApp" },
];

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500";

const Contact = ({ id }: SectionProps) => {
  const [state, handleSubmit] = useForm("xqaqvgpp");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section id={id} className="relative bg-white py-24 dark:bg-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            subtitle="Open to collaborations, freelance work, and new opportunities. Drop me a message — I usually reply within a day."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Info */}
          <Reveal className="flex flex-col gap-4">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-5 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-violet-500/40"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg text-white">
                  <Icon />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="block truncate font-semibold text-slate-900 hover:text-violet-600 dark:text-white dark:hover:text-violet-300"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-slate-900 dark:text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-2 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition-all hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-white"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            {showSuccess ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-2xl text-white">
                  <FiSend />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
                  Message sent!
                </h3>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 dark:border-white/10 dark:bg-white/5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Your name
                    </label>
                    <input id="name" name="name" type="text" required className={inputCls} placeholder="Jane Doe" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Your email
                    </label>
                    <input id="email" name="email" type="email" required className={inputCls} placeholder="jane@example.com" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-500" />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} required className={inputCls} placeholder="Tell me about your project or idea..." />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-500" />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {state.submitting ? "Sending..." : <>Send message <FiSend /></>}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
