"use client";

import React, { useState, useRef } from "react";
import axios from "axios";

import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const Contact = () => {
  const container = useRef(null);

  const baseUrl = process.env.NEXT_PUBLIC_FORMSPREE_API;
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    setStatus({
      submitted: ok,
      submitting: false,
      info: { error: !ok, msg: msg },
    });
    if (ok) {
      setInputs({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
      });
    }
  };

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
    setStatus((prev) => ({
      ...prev,
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: baseUrl,
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been sent."
        );
      })
      .catch((error) => {
        handleServerResponse(
          false,
          error.response.data.error ||
            "An error occurred while submitting the form."
        );
      });
  };

  return (
    <section
      id={"contact"}
      className="flex flex-col justify-center items-center"
      ref={container}
    >
      <div className="container py-8 md:py-16 lg:py-32 px-4 md:px-6">
        <div className="grid gap-12 lg:gap-14">
          <div className="space-y-4 text-center flex flex-col items-center justify-center">
            <h2 className="font-semibold text-4xl md:text-6xl">Say hi!</h2>
            <p className="text-gray-500 text-lg md:text-xl md:w-6/12 lg:w-3/12 dark:text-gray-400 ">
              Want to create something awesome? have any query? Drop an email or
              message.
            </p>
          </div>
          <div className="mx-auto max-w-2xl space-y-4">
            <form className="grid gap-4" onSubmit={handleOnSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    id="firstName"
                    value={inputs.firstName}
                    onChange={handleOnChange}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="lastName"
                    value={inputs.lastName}
                    onChange={handleOnChange}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  id="email"
                  type="email"
                  name="_replyto"
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  name="message"
                  onChange={handleOnChange}
                  required
                  fixed
                  value={inputs.message}
                  placeholder="Enter your message"
                />
              </div>
              <Button type="submit" disabled={status.submitting}>
                {status.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
