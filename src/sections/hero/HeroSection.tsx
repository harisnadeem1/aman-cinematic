import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function HeroSection() {
  return (
    <Section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#09090f]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.16),transparent_32%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.14),transparent_30%),linear-gradient(to_bottom,#09090f,#0d0b14_45%,#09090f)]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-zinc-400 md:text-xs">
            For my Phulli
          </p>

          <h1 className="text-5xl font-semibold leading-[0.9] tracking-tight text-white md:text-7xl lg:text-8xl">
            You became my life,
            <span className="block text-white/85">
              my joy, and my everything.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            There was no one before you. I was living in my own world,
            focused on life and career, and then you came and changed
            the feeling of everything.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm italic tracking-wide text-pink-200/80 md:text-base">
            My cutie little pie, is page par kuch dil ki baatein likhi hain...
            dhyan se parhna, sab tumhare liye hai.
          </p>

          <div className="mt-12 text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            Scroll to begin
          </div>
        </div>
      </Container>
    </Section>
  );
}