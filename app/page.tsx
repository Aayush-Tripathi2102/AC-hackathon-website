/** @format */

import { Toaster } from "sonner";

import { Hero } from "@/components/hero";
import { MetaverseSection } from "@/components/metaverse-section";
import { AIImageGallery } from "@/components/ai-image-gallery";
// import { Stats } from "@/components/stats"
import { Schedule } from "@/components/schedule";
// import { Speakers } from "@/components/speakers"
import { PrizesSection } from "@/components/prizes-section";
import { ConferencePasses } from "@/components/conference-passes";
// import { PastProjects } from "@/components/past-projects"
// import ImageGallery from "@/components/ImageGallery";
import Tempo from "@/components/tempo";
import Androidinfo from "@/components/androidinfo";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-500 ">
      <Navbar />
      <Hero />
      <Androidinfo />
      <MetaverseSection />
      <Tempo />
      {/* <ImageGallery /> */}
      <AIImageGallery />
      {/* <Stats /> */}
      {/* <PastProjects /> */}
      {/* <Speakers /> */}
      <Schedule />
      <PrizesSection />
      <ConferencePasses />
      <Toaster />
    </main>
  );
}
