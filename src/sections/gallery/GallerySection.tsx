"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { galleryItems } from "@/data/gallery";
import GalleryLightbox from "./GalleryLightbox";

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <Section className="relative overflow-hidden bg-[#09090f] py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_28%),linear-gradient(to_bottom,#09090f,#0d0b14_45%,#09090f)]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <Container className="relative z-10">
        <div className="columns-1 gap-4 md:columns-2 xl:columns-3">
          {galleryItems.map((item) => {
            const src = `/api/gallery/${item.id}`;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveImage(src)}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-2 text-left backdrop-blur-md"
              >
                <div className="relative overflow-hidden rounded-[22px]">
                  <Image
                    src={src}
                    alt=""
                    width={1200}
                    height={1600}
                    unoptimized
                    className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </Container>

      <GalleryLightbox
        src={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </Section>
  );
}