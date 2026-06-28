"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { surpriseContent } from "@/data/surprise";

const fadeUp = {
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 12,
    filter: "blur(6px)",
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function SurpriseSection() {
  const [showPromise, setShowPromise] = useState(false);
  const [showImage, setShowImage] = useState(false);

  return (
    <Section className="relative overflow-hidden bg-[#050509] py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.05),transparent_40%),linear-gradient(to_bottom,#050509,#0b0a12_45%,#050509)]" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.05] mix-blend-screen" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] uppercase tracking-[0.45em] text-zinc-400 md:text-xs"
          >
            {surpriseContent.eyebrow}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            {surpriseContent.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
          >
            {surpriseContent.intro}
          </motion.p>

          <AnimatePresence mode="wait">
            {!showPromise && (
              <motion.div
                key="first-step"
                {...fadeUp}
                className="mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPromise(true)}
                  className="group relative overflow-hidden rounded-full border border-pink-200/20 bg-pink-200/10 px-6 py-3 text-sm tracking-wide text-pink-100 transition duration-300 hover:bg-pink-200/20"
                >
                  <span className="relative z-10">
                    {surpriseContent.firstButton}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-120%] transition duration-1000 group-hover:translate-x-[120%]" />
                </motion.button>

                <p className="mt-4 text-sm italic text-zinc-500">
                  {surpriseContent.firstHint}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="wait">
          {showPromise && (
            <motion.div
              key="promise-card"
              initial={{ opacity: 0, y: 50, scale: 0.96, filter: "blur(10px)" }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{
                opacity: 0,
                y: 24,
                scale: 0.98,
                transition: { duration: 0.45 },
              }}
              className="mx-auto mt-16 max-w-3xl"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] px-6 py-10 text-center backdrop-blur-md md:px-12 md:py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.12),transparent_45%)]" />
                <div className="relative z-10">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-pink-200/80 md:text-xs">
                    {surpriseContent.promiseTitle}
                  </p>

                  <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                    {surpriseContent.promiseHeading}
                  </h3>

                  <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-200 md:text-lg">
                    {surpriseContent.promiseText}
                  </p>

                  {!showImage && (
                    <div className="mt-10">
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowImage(true)}
                        className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm tracking-wide text-white transition duration-300 hover:bg-white/15"
                      >
                        {surpriseContent.secondButton}
                      </motion.button>
                    </div>
                  )}

                  <AnimatePresence>
                    {showImage && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                            staggerChildren: 0.14,
                          },
                        }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-12"
                      >
                        <motion.div
                          variants={fadeUp}
                          className="mx-auto overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-md md:max-w-md"
                        >
                          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                            <Image
                              src={surpriseContent.imageSrc}
                              alt="Phulli final surprise"
                              fill
                              className="object-cover scale-[1.02]"
                            />
                          </div>
                        </motion.div>

                        <motion.p
                          variants={fadeUp}
                          className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-pink-100/85 md:text-base"
                        >
                          {surpriseContent.imageCaption}
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-8">
                          <p className="text-sm italic text-zinc-400 md:text-base">
                            {surpriseContent.closing}
                          </p>
                          <p className="mt-2 text-xl text-white md:text-2xl">
                            {surpriseContent.signature}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}