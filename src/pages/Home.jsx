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
import Seo from "../components/Seo";
import { siteConfig, toAbsoluteUrl } from "../lib/seo";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    image: toAbsoluteUrl(siteConfig.defaultImage),
    email: siteConfig.contactEmails,
    sameAs: [siteConfig.instagram],
    description: siteConfig.defaultDescription,
  };

  return (
    <div>
      <Seo
        title={siteConfig.defaultTitle}
        description={siteConfig.defaultDescription}
        path="/"
        schema={schema}
      />
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
