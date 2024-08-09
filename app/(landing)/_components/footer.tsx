import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiMailFill,
  RiMapPinFill,
  RiPhoneFill,
  RiTwitterFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    links: [
      { name: "Home", href: "/" },
      { name: "Doctors", href: "/Doctors" },
      { name: "Department", href: "/Department" },
      { name: "Services", href: "/Services" },
      { name: "Blog", href: "/Blog" },
    ],
  },
  {
    links: [
      { name: "Our pricing", href: "/" },
      { name: "Contact", href: "/Contact" },
      { name: "Careers", href: "/Careers" },
      { name: "Faqs", href: "/Faqs" },
      { name: "Privacy Policy", href: "/terms" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="footer pt-12 xl:pt-[150px]">
      <div className="container mx-auto pb-12 xl:pb-[100px]">
        <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
          <Infos />
          <QuickLinks />
          <OpeningHours />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

const Infos = () => {
  return (
    <div className="footer__item flex-1">
      <Link href="/" className="">
        <Image
          src="/assets/img/header/logo.svg"
          width={200}
          height={50}
          alt="logo"
          className="w-auto h-auto mb-5"
        />
      </Link>

      <p className="mb-[20px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit odit
        doloribus cum.
      </p>

      <div className="flex flex-col gap-y-3 mb-10">
        <div className="flex items-center gap-x-[6px]">
          <RiMapPinFill className="text-[24px] text-accent" />
          <div>123 Airling, Miola, NY</div>
        </div>
        <div className="flex items-center gap-x-[6px]">
          <RiMailFill className="text-[24px] text-accent" />
          <div>contact@email.com</div>
        </div>
        <div className="flex items-center gap-x-[6px]">
          <RiPhoneFill className="text-[24px] text-accent" />
          <div>(+123) 123 1235</div>
        </div>
      </div>

      <div className="flex gap-[14px] text-[30px]">
        <div className="p-[10px] rounded-[10px] shadow-lg shadow-slate-200 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
          <RiFacebookCircleFill />
        </div>
        <div className="p-[10px] rounded-[10px] shadow-lg shadow-slate-200 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
          <RiInstagramLine />
        </div>
        <div className="p-[10px] rounded-[10px] shadow-lg shadow-slate-200 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
          <RiTwitterFill />
        </div>
        <div className="p-[10px] rounded-[10px] shadow-lg shadow-slate-200 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
          <RiLinkedinBoxFill />
        </div>
      </div>
    </div>
  );
};

const QuickLinks = () => {
  return (
    <div className="footer__item flex-1">
      <h4 className="h4 mb-5">Quick Links</h4>
      <div className="flex gap-y-5">
        {navigation.map((item, index) => (
          <ul className="flex-1 flex flex-col gap-y-5" key={index}>
            {item.links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:text-accent transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

const OpeningHours = () => {
  return (
    <div className="footer__item flex-1">
      <h4 className="h4 mb-5">Opening Hours</h4>

      <div className="flex flex-col gap-5">
        <div className="flex-1">
          <div className="flex justify-between items-center border-b pb-[10px]">
            <div>Monday - Thursday</div>
            <div className="text-accent font-medium">8:00 AM - 6:00 PM</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center border-b pb-[10px]">
            <div>Friday - Saturday</div>
            <div className="text-accent font-medium">10:00 AM - 4:00 PM</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center border-b pb-[10px]">
            <div>Sunday</div>
            <div className="text-accent font-medium">Emergency Only</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center border-b pb-[10px]">
            <div>Personal</div>
            <div className="text-accent font-medium">7:00 AM - 9:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Copyright = () => {
  return (
    <div className="py-[30px] border-t">
      <div className="container mx-auto text-center">
        <div className="font-light text-base">
          Copyright © 2024 Harold - All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
