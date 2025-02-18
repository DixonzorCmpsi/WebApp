import AboutSectionOne from "@/components/Portal/About/AboutSectionOne";
import AboutSectionTwo from "@/components/Portal/About/AboutSectionTwo";
import ScrollUp from "@/components/Portal/Common/ScrollUp";
import Contact from "@/components/Portal/Contact";
import Features from "@/components/Portal/Features";
import Hero from "@/components/Portal/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deep Sports",
  description: "This is Home for For Everything Sports",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
