import HeroSection from "@/sections/hero/HeroSection";
import PromiseSection from "@/sections/promise/PromiseSection";
import StorySection from "@/sections/story/StorySection";
import CounterSection from "@/sections/counter/CounterSection";
import ReasonsSection from "@/sections/reasons/ReasonsSection";
import LetterSection from "@/sections/letter/LetterSection";
import ConfessionSection from "@/sections/confession/ConfessionSection"; 
import SurpriseSection from "@/sections/surprise/SurpriseSection";
import GallerySection from "@/sections/gallery/GallerySection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PromiseSection />
      <StorySection />
      <CounterSection />
      <ReasonsSection />
      <LetterSection />
      <ConfessionSection />
      <GallerySection />
      <SurpriseSection />

    </main>
  );
}