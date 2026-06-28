import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ReasonCard from "./ReasonCard";
import { reasons, reasonsIntro } from "@/data/reasons";

export default function ReasonsSection() {
  return (
    <Section className="relative overflow-hidden bg-[#09090f] py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.10),transparent_28%),linear-gradient(to_bottom,#09090f,#0d0b14_45%,#09090f)]" />
        <div className="absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-zinc-400 md:text-xs">
            {reasonsIntro.eyebrow}
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            The little things that
            <span className="block text-pink-200">made me love you more</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            {reasonsIntro.description}
          </p>
        </div>

       <div className="mt-20 columns-1 gap-5 md:columns-2 xl:columns-3">
  {reasons.map((reason) => (
    <div key={reason.title} className="mb-5 break-inside-avoid">
      <ReasonCard
        title={reason.title}
        text={reason.text}
        featured={reason.featured}
      />
    </div>
  ))}
</div>
      </Container>
    </Section>
  );
}