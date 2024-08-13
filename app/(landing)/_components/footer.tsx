import { Logo } from "@/components/ui/logo";
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
      { name: "Accueil", href: "/" },
      { name: "A Propos", href: "/about" },
      { name: "Aide", href: "/help" },
      { name: "Forfait", href: "/Forfait" },
      { name: "Rejoignez-nous", href: "/Rejoignez-nous" },
    ],
  },
  {
    links: [
      { name: "Tarifaction", href: "/" },
      { name: "Contact", href: "/Contact" },
      { name: "Blog", href: "/Careers" },
      { name: "Faqs", href: "/Faqs" },
      { name: "CGU", href: "/terms" },
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
      <Logo />

      <p className="mb-[20px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit odit
        doloribus cum.
      </p>

      <div className="flex flex-col gap-y-3 mb-10">
        <div className="flex items-center gap-x-[6px]">
          <RiMapPinFill className="text-[24px] text-accent" />
          <div>Yaoundé, Cameroun</div>
        </div>
        <div className="flex items-center gap-x-[6px]">
          <RiMailFill className="text-[24px] text-accent" />
          <div>contact@email.com</div>
        </div>
        <div className="flex items-center gap-x-[6px]">
          <RiPhoneFill className="text-[24px] text-accent" />
          <div>(+237) 697 438 841</div>
        </div>
      </div>

      <div className="flex gap-[14px] text-[30px]">
        <div className="p-2.5 rounded-lg shadow-lg text-accent hover:text-white hover:bg-accent cursor-pointer transition-all">
          <RiFacebookCircleFill />
        </div>
        <div className="p-2.5 rounded-lg shadow-lg text-accent hover:text-white hover:bg-accent cursor-pointer transition-all">
          <RiInstagramLine />
        </div>
        <div className="p-2.5 rounded-lg shadow-lg text-accent hover:text-white hover:bg-accent cursor-pointer transition-all">
          <RiTwitterFill />
        </div>
        <div className="p-2.5 rounded-lg shadow-lg text-accent hover:text-white hover:bg-accent cursor-pointer transition-all">
          <RiLinkedinBoxFill />
        </div>
      </div>
    </div>
  );
};

const QuickLinks = () => {
  return (
    <div className="footer__item flex-1">
      <h4 className="h4 mb-5">Liens rapides</h4>
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
      <h4 className="h4 mb-5">Heure de services</h4>

      <div className="flex flex-col gap-5">
        <div className="flex-1">
          <div className="flex justify-between items-center border-b pb-[10px]">
            <div>Lundi - Vendredi</div>
            <div className="text-accent font-medium">8H00 - 18H00</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center border-b pb-[10px]">
            <div>Samedi</div>
            <div className="text-accent font-medium">8H00 - 15H00</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center border-b pb-[10px]">
            <div>Dimanche</div>
            <div className="text-accent font-medium">Uniquement en Express</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center border-b pb-[10px]">
            <div>International</div>
            <div className="text-accent font-medium">10H00 - 16H00</div>
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
