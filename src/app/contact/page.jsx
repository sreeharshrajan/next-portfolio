"use client";

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner"; // 1. Import Sonner
import { fadeIn, staggerContainerChildren } from "@/utils/animate.helper";

import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [inputs, setInputs] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a promise for the toast to track
    const promise = axios.post(process.env.NEXT_PUBLIC_FORMSPREE_API, inputs);

    toast.promise(promise, {
      loading: 'Sending your message...',
      success: () => {
        setInputs({ firstName: "", lastName: "", email: "", message: "" });
        setIsSubmitting(false);
        return 'Message sent successfully! I\'ll get back to you soon.';
      },
      error: (err) => {
        setIsSubmitting(false);
        return 'Something went wrong. Please try again.';
      },
    });
  };

  return (
    <main className="relative min-h-screen w-full bg-[#030014] pt-32 pb-0 px-6 overflow-hidden  [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)]">
      <Toaster
        position="top-center"
        richColors
        theme="dark"
        toastOptions={{
          style: { marginTop: '80px' }
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          variants={staggerContainerChildren}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center"
        >
          <motion.h1 variants={fadeIn("up", "tween", 0.1, 0.6)} className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let&apos;s <span className="text-purple-400">talk.</span>
          </motion.h1>
          <motion.p variants={fadeIn("up", "tween", 0.2, 0.6)} className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
            Have a project in mind or just want to say hi? I&apos;m always open to new creative opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.3, 0.6)}
          initial="hidden"
          animate="show"
          className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl"
        >
          <form onSubmit={handleOnSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input id="firstName" placeholder="First Name" value={inputs.firstName} onChange={handleOnChange} required className="bg-white/5 border-white/10" />
              <Input id="lastName" placeholder="Last Name" value={inputs.lastName} onChange={handleOnChange} className="bg-white/5 border-white/10" />
            </div>
            <Input id="email" type="email" placeholder="Email Address" value={inputs.email} onChange={handleOnChange} required className="bg-white/5 border-white/10" />
            <Textarea id="message" placeholder="Your Message" value={inputs.message} onChange={handleOnChange} required className="bg-white/5 border-white/10 min-h-[150px]" />

            <Button type="submit" variant="glass" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
      {/* Bottom fade out to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030014] to-transparent z-20 pointer-events-none" />
    </main>
  );
}