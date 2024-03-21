"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Home from "@assets/icons/home.svg";
import config from "@/database/config/metadata.json";
import links from "@/database/config/pages.json";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex flex-col items-center py-10 bg-stone-950" id={"footer"}>
      <Link
        className="flex items-center w-10 h-10 p-2 mt-2 rounded-full text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-indigo-100 dark:hover:text-indigo-600 py-2 mr-5"
        href="/"
      >
        <Image src={Home} alt="Home Icon" />
      </Link>
      <nav className="mx-auto flex my-4 md:my-6 lg:my-10 flex-wrap items-center text-white justify-center">
        {links.map((link, index) => (
          <Link
            key={index}
            className={`mr-4 md:mr-6 lr:my-10  dark:hover:text-indigo-400`}
            href={link.to}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <div className="mx-auto flex flex-col text-center text-white my-4 md:my-6 lg:my-10 flex-wrap items-center leading-loose justify-center">
        <p>&copy; {year} Sreeharsh Rajan </p>
        <p>
          Powered by Vercel, Next.js, and{" "}
          <a
            href="https://github.com/sreeharshrajan"
            className="group transition-all duration-300 ease-in-out hover:underline  underline-offset-2 hover:text-yellow-400"
          >
            GitHub
          </a>
          .
        </p>
      </div>
      <div className="mx-auto flex text-center text-yellow-400 flex-wrap items-center leading-loose justify-center">
        {config.content["verse"]}
      </div>
    </footer>
  );
}

export default Footer;
