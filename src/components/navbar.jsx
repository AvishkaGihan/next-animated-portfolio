"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:48">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
        <Link
          href="/"
          className="test-sm bg-black rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white font-semibold mr-1">Avi</span>
          <span className="w-12 h-8 rounded bg-white flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="github.com">
          {" "}
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="dribbble.com">
          {" "}
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="instagram.com">
          {" "}
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="facebook.com">
          {" "}
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="pinterest.com">
          {" "}
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="linkedin.com">
          {" "}
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <div className="w-12 h-1 bg-white rounded"></div>
          <div className="w-12 h-1 bg-white rounded"></div>
          <div className="w-12 h-1 bg-white rounded"></div>
        </button>
        {/* MENU ITEMS*/}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
