import Link from "next/link";
import Image from "next/image";
import { RiHeartPulseLine } from "@remixicon/react";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";
config({
  ssrFadeConfig: {
    top,
    duration: 3000,
    distance: "60px",
    delay: 600,
  },
});
export const Hero = () => {
  return (
    <>
      <section className="hero bg-grey py-16 xl:pt-12 xl:pb-0 overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between h-full">
            <HeroLeft />
            <HeroRight />
          </div>
        </div>
      </section>
    </>
  );
};

const HeroLeft = () => {
  return (
    <div className="hero__text xl:w-[48%] text-center xl:text-left py-6">
      <Fade top duration={3000} delay={600} distance="60px">
        <HeroInfo />
        <HeroDL />
      </Fade>
    </div>
  );
};

const HeroInfo = () => {
  return (
    <>
      <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
        <RiHeartPulseLine className="text-2xl text-accent" />
        <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
          Live your life
        </div>
      </div>
      <h1 className="h1 mb-6">We care about your health</h1>
      <p className="mb-[42px] md:max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit odit
        doloribus cum. Ab eaque, veritatis velit tempore harum deleniti commodi,
        nobis consequatur laborum.
      </p>
      <div className="flex gap-6 flex-col xl:flex-row">
        <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
          Contact Us
        </button>

        <button className="btn btn-lg btn-outline mx-auto xl:mx-0">
          Book now
        </button>
      </div>
    </>
  );
};
const HeroDL = () => {
  return (
    <div className="flex flex-col space-y-6 pt-6 items-center lg:items-start">
      <div className="flex items-center space-x-2">
        <Image src={"/star.svg"} alt="star" width={20} height={20} />
        <p className="text-xs font-bold text-[#979797]">
          PAY ONE-TIME SMALL FEE, USE LIFETIME
        </p>
      </div>
      <div className="flex gap-6">
        <Link href="/" className="cursor-pointer">
          <Image
            src={"/appstore-badge.svg"}
            alt="appstore-badge"
            width={120}
            height={50}
          />
        </Link>
        <Link href="/" className="cursor-pointer">
          <Image
            src={"/googlePlay-badge.svg"}
            alt="googlePlay-badge"
            width={120}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
};

const HeroRight = () => {
  return (
    <div className="hero__img hidden xl:flex max-w-[814px] self-end">
      <Fade bottom duration={3000} delay={600} distance="60px">
        <Image
          src={"/assets/img/hero/img.png"}
          width={450}
          height={450}
          priority
          alt={"hero-image"}
          className="cursor-pointer w-auto h-auto"
        />
      </Fade>
    </div>
  );
};

export default Hero;
