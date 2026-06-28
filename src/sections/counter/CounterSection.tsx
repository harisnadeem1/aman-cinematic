import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import DaysCounter from "./DaysCounter";
import { counterData } from "@/data/counter";

export default function CounterSection() {
  return (
    <Section className="relative overflow-hidden bg-[#09090f] py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.10),transparent_28%),linear-gradient(to_bottom,#09090f,#0d0b14_45%,#09090f)]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.45em] text-zinc-400 md:text-xs">
              {counterData.eyebrow}
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              {counterData.title}
            </h2>

            <p className="mt-8 text-base leading-relaxed text-zinc-300 md:text-lg">
              {counterData.description}
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-10">
              <p className="text-[11px] uppercase tracking-[0.35em] text-pink-200/80 md:text-xs">
                {counterData.momentLabel}
              </p>

              <div className="mt-8">
                <DaysCounter startDate={counterData.startDate} />
              </div>

              <div className="mt-10 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    Started from
                  </p>
                  <p className="mt-2 text-sm text-zinc-200 md:text-base">
                    {counterData.startedFrom}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    {counterData.placeLabel}
                  </p>
                  <p className="mt-2 text-sm text-zinc-200 md:text-base">
                    {counterData.placeValue}
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-sm text-sm leading-relaxed text-zinc-400 md:text-base">
                {counterData.footerText}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}