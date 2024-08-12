/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Fade from "react-reveal/Fade";

export const Brands = () => {
  return (
    <section className="brands section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-y-12 xl:gap-y-0 justify-between">
          <Fade bottom duration={3000} delay={600} distance="100px">
            <Image
              className="brands__logo"
              src="/assets/img/brands/brand-1.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </Fade>
          <Fade bottom duration={3000} delay={800} distance="100px">
            <Image
              className="brands__logo"
              src="/assets/img/brands/brand-2.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </Fade>
          <Fade bottom duration={3000} delay={1000} distance="100px">
            <Image
              className="brands__logo"
              src="/assets/img/brands/brand-3.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </Fade>
          <Fade bottom duration={3000} delay={1200} distance="100px">
            <Image
              className="brands__logo"
              src="/assets/img/brands/brand-4.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </Fade>
          <Fade bottom duration={3000} delay={1400} distance="100px">
            <Image
              className="brands__logo"
              src="/assets/img/brands/brand-5.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Brands;
