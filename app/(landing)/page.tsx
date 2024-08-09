/* eslint-disable react/no-unescaped-entities */
"use client";

import Hero from "./_sections/hero";
import Stats from "./_sections/stats";
import Services from "./_sections/services";
import Appointment from "./_sections/appointment";
import Testimonials from "./_sections/testimonials";
import Team from "./_sections/team";
import Faq from "./_sections/fap";
import Departments from "./_sections/departments";
import Blog from "./_sections/blog";
import Brands from "./_sections/brands";
import Newsletter from "./_sections/newsletter";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Appointment />
      <Testimonials />
      <Team />
      <Faq />
      <Departments />
      <Blog />
      <Brands />
      <Newsletter />
    </>
  );
};

export default LandingPage;
