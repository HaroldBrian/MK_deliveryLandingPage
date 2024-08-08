"use client";

import Image from "next/image";
import Hero from "./_sections/hero";
import Stats from "./_sections/stats";
import Services from "./_sections/services";
import Appointment from "./_sections/appointment";
import Testimonials from "./_sections/testimonials";
import Team from "./_sections/team";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Appointment />
      <Testimonials />
      <Team />
      <section className="h-80"></section>
    </>
  );
};

export default LandingPage;
