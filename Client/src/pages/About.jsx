import React from "react";
import Hero from "../components/about/Hero";
import Info from "../components/about/Info";
import Why from "../components/about/Why";
import Leadership from "../components/about/Leadership";
import CoreValues from "../components/about/CoreValues";
import Download from "../components/home/Download";
import Companies from "../components/home/Companies";

const About = () => {
  return (
    <>
      <Hero />
      <Info />
      <Why />
      <CoreValues />
      <Leadership />
      <Download />
      <Companies />
    </>
  );
};

export default About;
