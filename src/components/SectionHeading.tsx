interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) => (
  <div
    className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
  >
    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400">
      {eyebrow}
    </span>
    <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-slate-500 dark:text-slate-400">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
