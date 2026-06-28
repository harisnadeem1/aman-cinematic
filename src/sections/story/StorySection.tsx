import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { timeline } from "@/data/timeline";
import clsx from "clsx";

export default function StorySection() {
  return (
    <Section className="relative overflow-hidden bg-[#09090f] py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.10),transparent_28%),linear-gradient(to_bottom,#09090f,#0d0b14_45%,#09090f)]" />
        <div className="absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-zinc-400 md:text-xs">
            Our story
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            The chapters that
            <span className="block text-pink-200">changed everything</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            Yeh kuch moments hain, Phulli, jo mere liye bohat zyada important hain.
            Inhi lamhon ne meri feelings ko gehra kiya, meri emotions ko strong
            banaya, aur meri life ko badal diya. Maine in yaadon ko yahan sambhal
            kar rakha hai, kyun ke har moment ki apni ek alag value hai mere dil mein.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-pink-300/50 to-transparent md:left-1/2 md:block" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${item.date}-${item.title}`}
                  className={clsx(
                    "relative flex w-full md:items-center",
                    isLeft ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  <div
                    className={clsx(
                      "relative w-full md:w-[calc(50%-2rem)]",
                      item.featured && "md:w-[calc(50%-1rem)]"
                    )}
                  >
                    <div
                      className={clsx(
                        "group relative overflow-hidden rounded-[28px] border px-6 py-6 backdrop-blur-md transition-all duration-500",
                        item.featured
                          ? "border-pink-200/20 bg-white/10 shadow-[0_0_60px_rgba(244,114,182,0.10)] md:px-8 md:py-8"
                          : "border-white/10 bg-white/5 hover:bg-white/[0.07]"
                      )}
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]" />

                      <div className="relative z-10">
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                          {item.date}
                        </p>

                        <div className="mt-4 inline-flex rounded-full border border-pink-200/15 bg-pink-200/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-pink-100/80">
                          {item.label}
                        </div>

                        <h3
                          className={clsx(
                            "mt-5 tracking-tight text-white",
                            item.featured
                              ? "text-2xl md:text-3xl"
                              : "text-xl md:text-2xl"
                          )}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-4 top-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-pink-200/40 bg-pink-200 shadow-[0_0_20px_rgba(244,114,182,0.7)] md:left-1/2 md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}