import clsx from "clsx";

type ReasonCardProps = {
  title: string;
  text: string;
  featured?: boolean;
};

export default function ReasonCard({
  title,
  text,
  featured = false,
}: ReasonCardProps) {
  return (
    <article
      className={clsx(
        "group relative overflow-hidden rounded-[28px] border p-6 backdrop-blur-md transition-all duration-500 md:p-7",
        featured
          ? "border-pink-200/20 bg-white/10 shadow-[0_0_60px_rgba(244,114,182,0.10)]"
          : "border-white/10 bg-white/5 hover:bg-white/[0.07]"
      )}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]" />

      <div className="relative z-10">
        <div className="mb-4 h-px w-12 bg-gradient-to-r from-pink-300/70 to-transparent" />

        <h3
          className={clsx(
            "tracking-tight text-white",
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          )}
        >
          {title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
          {text}
        </p>
      </div>
    </article>
  );
}