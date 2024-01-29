import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { LandingHero } from "@/components/landing/hero";
import { LandingWhatWeDo } from "@/components/landing/what-we-do";
import { LandingJoinCommunity } from "@/components/landing/join-community";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen pt-16 flex-col items-center ${inter.className}`}
    >
      <Navbar />
      <LandingHero />
      <LandingWhatWeDo />
      <LandingJoinCommunity />
    </main>
  );
}
