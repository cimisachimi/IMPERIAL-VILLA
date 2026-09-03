import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { ReviewsSection } from "@/components/ReviewSection";
import { ReservationSection } from "@/components/ReservationSection";
import { Footer } from "@/components/Footer";
import { LocationMapSection } from "@/components/LocationMapSection"

export const metadata: Metadata = {
  title: "Villa Imperial Syariah",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <LocationMapSection /> {/* Posisi terbaik sebelum ulasan */}
      <ReviewsSection />
      <ReservationSection />
      <Footer />
    </div>
  );
}