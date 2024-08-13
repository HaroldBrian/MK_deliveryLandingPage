/* eslint-disable react/no-unescaped-entities */
"use client";

import Hero from "./_sections/hero";
import Stats from "./_sections/stats";
import Services from "./_sections/services";
import Appointment from "./_sections/appointment";
import Testimonials from "./_sections/testimonials";
import Faq from "./_sections/faq";
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
      <Faq />
      <Blog />
      <Brands />
      <Newsletter />
    </>
  );
};

export default LandingPage;
