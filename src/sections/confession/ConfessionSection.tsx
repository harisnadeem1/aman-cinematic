import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { confessionContent } from "@/data/confession";

export default function ConfessionSection() {
  return (
    <Section className="relative overflow-hidden bg-[#050509] py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_28%),linear-gradient(to_bottom,#050509,#0b0a12_45%,#050509)]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-zinc-400 md:text-xs">
            {confessionContent.eyebrow}
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            {confessionContent.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            {confessionContent.intro}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] px-5 py-6 shadow-[0_0_60px_rgba(0,0,0,0.7)] backdrop-blur-xl md:px-7 md:py-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-zinc-500 md:text-xs">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Live chat memory
                </span>
                <span>{confessionContent.meta}</span>
              </div>

              <div className="mt-5 rounded-2xl bg-zinc-900/70 p-4 text-left shadow-[0_0_24px_rgba(0,0,0,0.65)] md:p-5">
                <p className="text-[13px] font-medium text-pink-100/90">
                  from · Phulli
                </p>

                <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-100 md:text-[15px] md:leading-relaxed">
                  {confessionContent.message.map((line, index) => (
                    <p key={index} className="font-mono text-[13px] md:text-[14px]">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-col items-start justify-between gap-2 text-xs text-zinc-400 md:flex-row md:items-center md:text-sm">
                <p className="italic text-pink-100/80">
                  ♥ {confessionContent.footerNote}
                </p>
                <p className="text-zinc-300">{confessionContent.footerSignature}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}