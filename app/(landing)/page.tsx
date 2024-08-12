/* eslint-disable react/no-unescaped-entities */
"use client";

import Hero from "./_sections/hero";
import Stats from "./_sections/stats";
import Services from "./_sections/services";
import Appointment from "./_sections/appointment";
import Testimonials from "./_sections/testimonials";
import Team from "./_sections/team";
import Faq from "./_sections/faq";
import Departments from "./_sections/departments";
import Blog from "./_sections/blog";
import Brands from "./_sections/brands";
import Newsletter from "./_sections/newsletter";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";

const LandingPage = () => {
  return (
    <>
      <Hero />

      <Fade>
        <Stats />
      </Fade>
      <Flip>
        <Stats />
      </Flip>
      <Rotate>
        <Stats />
      </Rotate>
      <Zoom>
        <Stats />
      </Zoom>
      <Bounce>
        <Stats />
      </Bounce>
      <Roll>
        <Stats />
      </Roll>
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
