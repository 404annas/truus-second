import React from "react";
import Hero from "../sections/Hero";
import TextAnimation from "../sections/TextAnimation";
import Agency from "../sections/Agency";
import Projects from "../sections/Projects";
import Callus from "../sections/Callus";
import ClientsMarquee from "../sections/ClientMarquee";
import TeamSection from "../sections/TeamSection";
import Hero2 from "../sections/Hero2";
import ContactForm from "../sections/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero2 />
      <TextAnimation />
      <Agency />
      <Projects />
      <Callus />
      <TeamSection />
      <ClientsMarquee />
      <ContactForm />
    </div>
  );
}
