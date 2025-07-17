import React from "react";
import Hero from "../components/about/Hero";
import Info from "../components/about/Info";
import Why from "../components/about/Why";
import Leadership from "../components/about/Leadership";
import CoreValues from "../components/about/CoreValues";
import Download from "../components/home/Download";
import Companies from "../components/home/Companies";
import FAQ from "../components/about/faq";

const About = () => {
  return (
    <main className="space-y-16">
      <Hero />
      <Info />
      <Why />
      <CoreValues />
      <FAQ />
      <Leadership />
      <Download />
      <Companies />
    </main>
  );
};

export default About;
