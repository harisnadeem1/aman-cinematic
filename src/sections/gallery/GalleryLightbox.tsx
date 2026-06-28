"use client";

import Image from "next/image";

type GalleryLightboxProps = {
  src: string | null;
  onClose: () => void;
};

export default function GalleryLightbox({
  src,
  onClose,
}: GalleryLightboxProps) {
  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white"
        aria-label="Close image"
      >
        Close
      </button>

      <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3">
        <div className="relative aspect-[4/5] max-h-[85vh] w-full">
          <Image
            src={src}
            alt=""
            fill
            unoptimized
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}