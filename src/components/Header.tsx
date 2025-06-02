import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];
const Header = () => {
  return (
    <header className="absolute z-20 w-full mx-auto h-24 flex items-center justify-between px-10 text-slate-200 ">
      {/* Logo and title – przesunięte na lewo */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo2.png"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-2xl font-semibold">Gentleman’s Cut</h1>
      </div>

      {/*Desktop Navigation*/}
      <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2  gap-6 text-lg font-medium md:ml-16 xl:ml-0">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:underline transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {/*Mobile Navigation*/}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-slate-900 text-slate-200 border-none w-64"
          >
            <nav className="mt-10 flex flex-col gap-6 text-lg font-medium ">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:underline transition text-center"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
