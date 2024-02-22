import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <main>
      <section className="">
        <div className="layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
          {/* <p className="text-sm text-gray-700 dark:text-gray-400">Looks like you are lost.</p> */}
          <h1 className="mt-4 text-4xl md:text-6xl"> Page Under Construction</h1>
          {/* <h1 className="mt-4 text-4xl md:text-6xl"> Page Not Found</h1> */}
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
            <a
              href="/"
              className="cursor-newtab animated-underline custom-link inline-flex items-center font-medium focus-visible:ring-primary-500 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2 border-dark border-b border-dotted hover:border-black/0 group gap-[0.25em]"
            >
              <span>Back to home</span>
              <svg
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative transition-transform duration-200 motion-safe:-translate-x-1 group-hover:translate-x-0"
              >
                <path
                  fill="currentColor"
                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                ></path>
                <path
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="origin-left transition-all duration-200 opacity-0 motion-safe:-translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
                ></path>
              </svg>
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
