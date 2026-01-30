// components/contact/ContactForm.jsx
"use client";

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const ContactForm = () => {
    const baseUrl = process.env.NEXT_PUBLIC_FORMSPREE_API;

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null,
    });

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleOnChange = (e) => {
        const { id, value } = e.target;
        setInputs((prev) => ({ ...prev, [id]: value }));
        if (status.error) setStatus((prev) => ({ ...prev, error: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            await axios.post(baseUrl, inputs);
            setStatus({ submitting: false, submitted: true, error: null });
            setInputs({ firstName: "", lastName: "", email: "", message: "" });
        } catch (error) {
            setStatus({
                submitting: false,
                submitted: false,
                error: error.response?.data?.error || "Something went wrong. Please try again.",
            });
        }
    };

    return (
        <div className="relative group">
            {/* Decorative background glow for the form card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative bg-[#030014]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            id="firstName"
                            placeholder="First Name"
                            value={inputs.firstName}
                            onChange={handleOnChange}
                            required
                            className="bg-white/5 border-white/10 focus:ring-purple-500/50"
                        />
                        <Input
                            id="lastName"
                            placeholder="Last Name"
                            value={inputs.lastName}
                            onChange={handleOnChange}
                            className="bg-white/5 border-white/10 focus:ring-purple-500/50"
                        />
                    </div>

                    <Input
                        id="email"
                        type="email"
                        placeholder="Your Email Address"
                        value={inputs.email}
                        onChange={handleOnChange}
                        required
                        className="bg-white/5 border-white/10 focus:ring-purple-500/50"
                    />

                    <Textarea
                        id="message"
                        placeholder="How can I help you?"
                        value={inputs.message}
                        onChange={handleOnChange}
                        required
                        className="min-h-[150px] bg-white/5 border-white/10 focus:ring-purple-500/50"
                    />
                    <Button
                        type="submit"
                        variant="glass"
                        disabled={status.submitting}
                        className="w-full"
                    >
                        {status.submitting ? "Sending..." : "Send Message"}
                    </Button>

                    {/* Feedback Messages */}
                    {status.submitted && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-green-400 text-sm font-light mt-4"
                        >
                            Successfully sent! I'll get back to you shortly.
                        </motion.p>
                    )}
                    {status.error && (
                        <p className="text-center text-red-400 text-sm font-light mt-4">
                            {status.error}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;