import AboutSectionOne from "@/components/Portal/About/AboutSectionOne";
import AboutSectionTwo from "@/components/Portal/About/AboutSectionTwo";
import Breadcrumb from "@/components/Portal/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="The App for everything sports. Created By Dee Talk for the benefit of sport junkies. Everything is free, learn about the game as much as you want."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
