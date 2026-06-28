import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function PromiseSection() {
  return (
    <Section className="relative overflow-hidden py-28 md:py-40 bg-[#09090f]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.10),transparent_28%),linear-gradient(to_bottom,#09090f,#0d0b14_45%,#09090f)]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur-md md:px-12 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-zinc-400 md:text-xs">
            A promise already living in my heart
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            I want you to be my
            <span className="block text-pink-200">first and last.</span>
          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-pink-300/60 to-transparent" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            I do not want someone else after you. Aap meri Phulli ho,
            aur main aapka Phullu hoon, and every part of this page is
            only trying to say one thing in different ways:
            I love you more deeply than words can fully hold.
          </p>

          <p className="mt-10 text-sm italic tracking-wide text-pink-100/80 md:text-base">
            Forever yours,
          </p>
          <p className="mt-2 text-xl text-white md:text-2xl">
            Your Phullu
          </p>
        </div>
      </Container>
    </Section>
  );
}