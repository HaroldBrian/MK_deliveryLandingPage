/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import {
  RiArrowDownSLine,
  RiHeartPulseLine,
  RiTruckLine,
} from "@remixicon/react";
import Fade from "react-reveal/Fade";

export const Hero = () => {
  return (
    <>
      <section className="hero bg-grey py-16 lg:pt-12 lg:pb-0 overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full">
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
    <div className="hero__text lg:w-[52%] text-center lg:text-left py-6">
      <Fade top duration={1500} delay={500} distance="60px">
        <HeroInfo />
        <HeroDL />
      </Fade>
    </div>
  );
};

const HeroInfo = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-white py-[10px] px-[18px] w-max gap-x-2 mb-[26px] rounded-full mx-auto lg:mx-0">
        <RiTruckLine className="text-2xl text-accent" />
        <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
          Votre service de livraison
        </div>
      </div>
      <h1 className="h1 mb-6">
        <span className="text-accent">Livrez </span> vos colis en toute{" "}
        <span className="text-accent"> sécurité</span> et
        <span className="text-accent"> rapidité</span>
      </h1>
      <p className="mb-[42px] md:max-w-xl">
        Notre plateforme vous permet d'envoyer et de recevoir vos colis en toute
        sécurité, rapidement et à des tarifs compétitifs.
      </p>
      <div className="flex gap-6 flex-col lg:flex-row">
        <button className="btn btn-lg btn-accent mx-auto lg:mx-0">
          A propos de nous
        </button>

        <button className="btn btn-lg btn-outline mx-auto lg:mx-0">
          Commencer
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
          SERVICE RAPIDE, SECURISE, EFFICACE
        </p>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/" className="cursor-pointer">
          <Image
            src={"/google-play-badge-fr.png"}
            alt="googlePlay-badge"
            width={190}
            height={50}
          />
        </Link>
        <Link href="/" className="cursor-pointer">
          <Image
            src={"/app-store-badge-fr.png"}
            alt="appstore-badge"
            width={174}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
};

const HeroRight = () => {
  return (
    <div className="hero__img hidden lg:flex max-w-md">
      <Fade bottom duration={1500} delay={500} distance="60px">
        <Image
          alt="Mockup"
          src="/hero-image.png"
          width={500}
          height={500}
          priority
        />
      </Fade>
    </div>
  );
};

export default Hero;
