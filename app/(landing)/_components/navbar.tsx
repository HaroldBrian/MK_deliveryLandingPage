"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Customers", href: "/customers" },
  { name: "Contact", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
];

export const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full pt-8 select-none">
      <NavigationMenu className="w-full max-w-[1200px] justify-between px-5 py-2 h-[60px] items-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <h2 className="text-2xl font-bold">Mediacy</h2>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="flex justify-between items-center font-light space-x-14 text-xs">
          {navigation.map((item) => (
            <NavigationMenuItem
              key={item.name}
              className="cursor-pointer hover:underline"
            >
              <Link href={item.href} className="text-sm font-medium">
                {item.name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/">
              <Button variant="primary" size="lg">
                Login
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
