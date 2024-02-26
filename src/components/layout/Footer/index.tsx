import Link from "next/link";
import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex flex-col items-center mb-10 ">
      <Link
        className="flex items-center w-10 h-10 p-2 mt-2 rounded-full text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-indigo-100 dark:hover:text-indigo-600 py-2 mr-5"
        href="/"
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
      <nav className="mx-auto flex my-4 md:my-6 lg:my-10 flex-wrap items-center text-base justify-center">
        <Link
          href="#"
          className="mr-4 md:mr-6 lr:my-10  dark:hover:text-indigo-400"
        >
          About
        </Link>
        <Link
          href="#"
          className="mr-4 md:mr-6 lr:my-10  dark:hover:text-indigo-400"
        >
          Works
        </Link>

        <Link
          href="#"
          className="mr-4 md:mr-6 lr:my-10  dark:hover:text-indigo-400"
        >
          Skills
        </Link>
        <Link
          href="#"
          className="mr-4 md:mr-6 lr:my-10  dark:hover:text-indigo-400"
        >
          Blogs
        </Link>
      </nav>
      <div className="mx-auto flex text-center my-4 md:my-6 lg:my-10 flex-wrap items-center leading-loose justify-center">
        &copy; {year} Sreeharsh Rajan <br />
        Powered by Vercel, Next.js, and GitHub.
      </div>
    </div>
  );
}

export default Footer;
