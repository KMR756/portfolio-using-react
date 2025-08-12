import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_925lqw8", // replace with your EmailJS service ID
        "template_787wbdi", // replace with your EmailJS template ID
        formData,
        "evWeNmpde6thT6lpP" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="max-w-screen-md mx-auto p-6 mt-25 rounded-3xl bg-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold mb-8 text-[#DC2626] text-center">
        Contact Me
      </h2>

      <div className="mb-8 space-y-4">
        <p>
          <strong>Address:</strong> Dhaka, Bangladesh
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:kmrejoantanjim@gmail.com"
            className="text-[#DC2626] underline"
          >
            kmrejoantanjim@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone (WhatsApp):</strong>{" "}
          <a
            href="https://wa.me/8801716130901"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] underline"
          >
            01716130901
          </a>
        </p>
      </div>

      <form onSubmit={sendEmail} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#DC2626]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#DC2626]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#DC2626]"
        />
        <button
          type="submit"
          className="w-full bg-[#DC2626] py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-green-400 font-medium">{status}</p>
      )}
    </div>
  );
};

export default Contact;
