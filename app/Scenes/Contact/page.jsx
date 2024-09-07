"use client";
import React from "react";

// REACT
import { useState, useRef } from "react";

// LIBRARIES
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

// COMPONENTS
import SubmitButton from "@/app/Components/SubmitButton/page";

const Contact = () => {
  // CLEAR FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // EMAIL JS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm("service_nwk9ud3", "template_8nfaaha", form.current, {
        publicKey: "CLllgrNb6UYby4AOj",
      })
      .then(
        () => {
          toast.success(
            `Thanks for your email ${name}! We'll be in touch soon!`,
          );
        },
        (error) => {
          toast.error(
            `Oh no! There's been an error! If the problem persists, please contact hello@jorvikweb.dev`,
          );
        },
      );
  };

  const styles = {
    background: "h-full bg-white ",
    title:
      "text-center text-4xl md:text-5xl lg:text-5xl pt-12 lg:pt-44 md:pt-16 py-12 text-[#252525]",
    description:
      "text-[#252525] text-center text-md md:text-lg mx-16 mb-8 md:mb-16 lg:mb-12",
    form: "flex flex-col justify-center w-[min(100%,20rem)] lg:w-[min(100%,38rem)] md:w-[min(100%,24rem)] mx-auto",
    inputName: " p-2 rounded-md bg-zinc-200 border-4 border-[#213251] mb-4 ",
    inputMessage:
      "rounded-md bg-zinc-200 border-4 border-[#213251] h-40 p-2 mb-4 ",
    button:
      "bg-[#213251] px-6 py-2 rounded-lg mt-4 text-white font-light tracking-widest",
  };

  return (
    <div id="contact" className={styles.background}>
      <h1 className={styles.title}>CONTACT</h1>

      <p className={styles.description}>
        Please get in touch if you have any questions.
      </p>

      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.inputName}
          value={name}
          required
          maxLength={500}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="senderEmail"
          placeholder="Email"
          className={styles.inputName}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={500}
        />
        <textarea
          type="textarea"
          name="message"
          placeholder="Enter your message"
          className={styles.inputMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>

      <div className="pb-24"></div>
    </div>
  );
};

export default Contact;
