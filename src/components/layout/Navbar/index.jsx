"use client";

import React, { useRef, MouseEventHandler } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { usePathname } from "next/navigation";

import Link from "next/link";
import pages from "@/database/config/navigation.json";

import styles from "./navbar.module.scss";

function Navbar() {
  const pathname = usePathname();

  gsap.registerPlugin(ScrollToPlugin);

  const navigationRef = useRef();

  const { contextSafe } = useGSAP({ scope: navigationRef });

  const doAnim = contextSafe((e) => {
    let height = e.target.offsetHeight;
    let width = e.target.offsetWidth;
    let x = e.target.offsetLeft;
    let y = e.target.offsetTop;

    let bg = e.target.parentNode.parentNode.parentNode.querySelector(
      `.${styles.bg}`
    );

    gsap.to(bg, {
      duration: 0.3,
      scale: 1.2,
      x: x,
      y: y,
      width: width,
      height: height,
      padding: "8px 15px",
      autoAlpha: 1,
    });
  });

  const resetAnim = contextSafe((e) => {
    let bg = e.target.parentNode.parentNode.parentNode.querySelector(
      `.${styles.bg}`
    );

    gsap.to(bg, {
      duration: 0.3,
      scale: 0,
      autoAlpha: 0,
    });
  });

  const scrollToSection = contextSafe((e) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: e,
    });
  });

  return (
    <header className="fixed z-50 inset-x-0 top-5 px-4 max-w-screen-lg mx-auto">
      <div className="flex items-center justify-between space-y-3 rounded-xl backdrop-filter backdrop-blur-md dark:bg-white/5 bg-white px-5 pb-4 pt-0 drop-shadow-2xl transition-all duration-150 ease-in-out  dark:text-white lg:flex-row lg:space-y-0 lg:pt-2 shadow-xl">
        <div className="flex">
          <Link
            className="flex items-center w-10 h-10 p-2 mt-2 rounded-full text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-indigo-100 dark:hover:text-indigo-600 py-2 mr-5"
            href="/"
            onClick={() => scrollToSection("#home")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </Link>
          {pathname === "/" && (
            <nav
              className="ml-auto flex mt-2 flex-wrap items-center text-base justify-center"
              ref={navigationRef}
            >
              {Object.values(pages)
                .filter((item) => item.showOnNavigation)
                .filter((item) => item.isActive)
                .map((item, index) => (
                  <span key={index} className="mr-5">
                    {item.link.startsWith("#") ? (
                      <button
                        onMouseEnter={doAnim}
                        onMouseLeave={resetAnim}
                        onClick={() => scrollToSection(item.link)}
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        href={item.link}
                        onMouseEnter={doAnim}
                        onMouseLeave={resetAnim}
                      >
                        {item.title}
                      </Link>
                    )}
                  </span>
                ))}
              <span className={styles.bg}></span>
            </nav>
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            className="flex items-center w-10 h-10 p-2 mt-2 rounded-full transition-all duration-150 ease-in-out text-zinc-200 hover:bg-white hover:text-black dark:bg-black/30 dark:text-white dark:hover:bg-indigo-100 dark:hover:text-indigo-600 py-2 mr-5"
            href="https://github.com/sreeharshrajan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="p-0.5"
              fill="currentColor"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fillRule="nonzero"
                  d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
                />
              </g>
            </svg>
          </Link>
          <Link
            className="flex items-center w-10 h-10 p-2 mt-2 rounded-full transition-all duration-150 ease-in-out  text-zinc-200 hover:bg-white hover:text-black dark:bg-black/30 dark:text-white dark:hover:bg-indigo-100 dark:hover:text-indigo-600 py-2 mr-5"
            href="https://linkedin.com/in/sreeharshk"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 448 512"
              className="p-0.5"
              fill="currentColor"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </Link>

          <Link
            className="flex items-center w-10 h-10 p-2 mt-2 rounded-full  transition-all duration-150 ease-in-out text-zinc-200 hover:bg-white hover:text-black dark:bg-black/30 dark:text-white dark:hover:bg-indigo-100 dark:hover:text-indigo-600 py-2"
            href="https://twitter.com/SreeharshR"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              version="1.1"
              className="p-0.5"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md  bg-black px-4 text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-zinc-50 dark:hover:text-indigo-600 py-2 font-semibold"
        >
          <span className="mr-1">Let&apos;s Talk</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="w-5"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
