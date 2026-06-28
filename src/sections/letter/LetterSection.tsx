import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { letterContent } from "@/data/letter";

export default function LetterSection() {
  return (
    <Section className="relative overflow-hidden bg-[#09090f] py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_28%),linear-gradient(to_bottom,#09090f,#0d0b14_45%,#09090f)]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-zinc-400 md:text-xs">
            {letterContent.eyebrow}
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            {letterContent.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            {letterContent.intro}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] px-6 py-10 backdrop-blur-md md:px-12 md:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="text-lg italic text-pink-100/90 md:text-xl">
                {letterContent.greeting}
              </p>

              <div className="mt-8 space-y-6">
                {letterContent.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-zinc-200 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-base italic text-pink-100/80 md:text-lg">
                  {letterContent.closing}
                </p>
                <p className="mt-2 text-2xl text-white md:text-3xl">
                  {letterContent.signature}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}