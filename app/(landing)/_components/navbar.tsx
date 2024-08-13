"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/ui/logo";
import Script from "next/script";
import {
  RiCloseLine,
  RiMapPin2Fill,
  RiMenu2Line,
  RiPhoneFill,
  RiSearchLine,
} from "@remixicon/react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "A Propos", href: "/about" },
  { name: "Aide", href: "/help" },
  { name: "Forfait", href: "/pricing" },
  { name: "Rejoignez-nous", href: "/register" },
];

export const Navbar = () => {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-14">
        <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
          {/* logo */}
          <div className="flex justify-center lg:justify-normal">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
            {/* Location */}
            <div className="flex items-center justify-center gap-x-2 lg:justify-normal">
              <RiMapPin2Fill className="text-2xl text-accent" />
              <div className="text-secondary">Yaoundé, Cameroun</div>
            </div>
            {/* Phone */}
            <div className="flex items-center justify-center gap-x-2 lg:justify-normal">
              <RiPhoneFill className="text-2xl text-accent" />
              <div className="text-secondary">(+237) 697 438 841</div>
            </div>
            {/* btn */}
            <button className="btn btn-sm btn-outline w-60 lg:w-auto mx-auto lg:mx-0">
              Commencer
            </button>

            {/* mobile nav */}
            <div className="mnav bg-white fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20 ">
              {/* nav trigger btn */}
              <div className="mnav__close-btn bg-primary w-12 h-12 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all">
                <RiMenu2Line className="mnav__close-btn-icon text-2xl text-white" />
                <RiCloseLine className="mnav__close-btn-icon-close text-2xl text-white hidden" />
              </div>

              {/* logo, list, form */}
              <div className="px-12 flex flex-col gap-y-12 h-full">
                {/* logo */}
                <Link href="/">
                  <Logo />
                </Link>

                {/* list */}

                <NavigationMenu className="flex flex-col gap-y-5 justify-start items-start space-y-10">
                  <NavigationMenuList className="flex flex-col space-y-8 font-medium text-sm items-start space-x-0">
                    {navigation.map((item) => (
                      <NavigationMenuItem
                        key={item.name}
                        className="cursor-pointer text-secondary hover:text-accent transition-all duration-300"
                      >
                        <NavigationMenuLink href={item.href}>
                          {item.name}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href="/">
                        <form className="relative flex gap-x-[10px]">
                          <label htmlFor="mnav-search-input">
                            <RiSearchLine className="text-2xl text-accent" />
                          </label>
                          <input
                            type="text"
                            id="mnav-search-input"
                            placeholder="Search"
                            className="outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent placeholder:italic "
                          />
                        </form>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            {/* desktop nav */}
            <div className="bg-white absolute w-full left-0 top-[80px] shadow-custom1 h-16 rounded-lg hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
              <NavigationMenu className="w-full max-w-[1200px] justify-between">
                <NavigationMenuList className="flex justify-between items-center font-medium space-x-14 text-sm">
                  {navigation.map((item) => (
                    <NavigationMenuItem
                      key={item.name}
                      className="cursor-pointer text-secondary hover:text-accent transition-all duration-300"
                    >
                      <NavigationMenuLink href={item.href}>
                        {item.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/">
                      <form className="relative flex gap-x-[10px]">
                        <label htmlFor="search-input">
                          <RiSearchLine className="text-2xl text-accent" />
                        </label>
                        <input
                          type="text"
                          id="search-input"
                          placeholder="Search..."
                          className="outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150"
                        />
                      </form>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>

      <Script id="toggle-mobileNav">
        {`
        const mobileNav = document.querySelector(".mnav");
        const closeBtn = document.querySelector(".mnav__close-btn");
        const navOpenedClass = "left-0";
        const navClosedClass = "-left-[300px]";
        
        const iconActiveElement = document.querySelector(".mnav__close-btn-icon");
        const iconInactiveElement = document.querySelector(".mnav__close-btn-icon-close");

        closeBtn.addEventListener("click", () => {
        if (mobileNav.classList.contains(navClosedClass)) {
          
        mobileNav.classList.toggle("left-0");
        mobileNav.classList.toggle("-left-[300px]");
        iconActiveElement.classList.add("hidden");
        iconInactiveElement.classList.remove("hidden");
        }else{
          
        mobileNav.classList.toggle("left-0");
        mobileNav.classList.toggle("-left-[300px]");
        iconActiveElement.classList.remove("hidden");
        iconInactiveElement.classList.add("hidden");
        }
        })
        `}
      </Script>
    </>
  );
};
