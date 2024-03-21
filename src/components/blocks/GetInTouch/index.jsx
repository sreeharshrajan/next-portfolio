"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link"

const GetInTouch = () => {
  const container = useRef(null);
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-center w-11/12 md:w-10/12 lg:w-4/6 xl:w-4/6 py-14 space-y-6 text-2xl md:text-3xl font-light tracking-wide"
      ref={container}
    >
      <h2 className="text-4xl lg:text-7xl font-medium my-0 lg:my-4">Say hi!</h2>
      <p className="text-xl lg:text-3xl">
        Want to create something awesome? <br /> Or, have any query? <br />
        <Link className="underline underline-offset-4" href="/contact">Drop an email or tweet.</Link>
      </p>
    </section>
  );
};

export default GetInTouch;
