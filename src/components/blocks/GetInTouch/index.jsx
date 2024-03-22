"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const GetInTouch = () => {
  const container = useRef(null);
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-center w-11/12 md:w-10/12 lg:w-4/6 xl:w-4/6 py-14 space-y-6 text-2xl md:text-3xl font-light tracking-wide"
      ref={container}
    >
      <motion.h2
        variants={fadeIn("up", "tween", 0.25, 0.85)}
        whileInView={`show`}
        initial={`hidden`}
        className="text-4xl lg:text-7xl font-medium my-0 lg:my-6"
      >
        Say hi!
      </motion.h2>
      <motion.p
        variants={fadeIn("up", "tween", 1, 1.25)}
        whileInView={`show`}
        initial={`hidden`}
        className="text-xl lg:text-3xl"
      >
        Want to create something awesome? <br /> Or, have any query? <br />
        <Link className="underline underline-offset-4" href="/contact">
          Drop an email or tweet.
        </Link>
      </motion.p>
    </section>
  );
};

export default GetInTouch;
