import React from "react";
import Hero from "../sections/Hero";
import TextAnimation from "../sections/TextAnimation";
import Agency from "../sections/Agency";
import Projects from "../sections/Projects";
import Callus from "../sections/Callus";
import ClientsMarquee from "../sections/ClientMarquee";
import TeamSection from "../sections/TeamSection";
import Preloader from "../components/PreLoader";

export default function Home() {
  return (
    <div>
      <Preloader />
      <Hero />
      <TextAnimation />
      <Agency />
      <Projects />
      <Callus />
      <TeamSection />
      <ClientsMarquee />
    </div>
  );
}
