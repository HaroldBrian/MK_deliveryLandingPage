import Link from "next/link";
import Script from "next/script";
import { BackgroundImage } from "./_components/background-image";
import { Navbar } from "./_components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  RiArrowRightSLine,
  RiMapPin2Fill,
  RiPhoneFill,
  RiSearchLine,
} from "@remixicon/react";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      {/* <BackgroundImage /> */}
      <Navbar />
      {children}
    </>
  );
};

export default LandingLayout;
