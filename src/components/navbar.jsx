"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: { x: 0 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 lg:w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
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
      <div className="hidden md:flex gap-4 lg:w-1/3">
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
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU ITEMS*/}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
