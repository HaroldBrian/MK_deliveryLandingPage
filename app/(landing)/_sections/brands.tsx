/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Fade from "react-reveal/Fade";

export const Brands = () => {
  return (
    <section className="brands section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-y-12 xl:gap-y-0 justify-between">
          <Fade bottom duration={1500} delay={500} distance="100px">
            <Image
              className="brands__logo"
              src="/assets/img/brands/brand-1.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </Fade>
          <Fade bottom duration={1500} delay={700} distance="100px">
            <Image
              className="brands__logo"
              src="/assets/img/brands/brand-2.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </Fade>
          <Fade bottom duration={1500} delay={900} distance="100px">
            <Image
              className="brands__logo"
              src="/assets/img/brands/brand-3.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </Fade>
          <Fade bottom duration={1500} delay={1100} distance="100px">
            <Image
              className="brands__logo"
              src="/assets/img/brands/brand-4.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </Fade>
          <Fade bottom duration={1500} delay={1300} distance="100px">
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
