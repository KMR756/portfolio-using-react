import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import heroVid from "../../../assets/hero.mp4";
// import cvFile from "/my-cv-old.pdf";

import myPic from "../../../assets/myPic.png";

const Hero = () => {
  const socials = [
    { icon: FaFacebookF, link: "https://www.facebook.com/km.rahat.814194/" },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/km-rejoan-tanjim/",
    },
    { icon: FaGithub, link: "https://github.com/KMR756" },
  ];
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVid}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-12 lg:px-30 xl:px-62">
        {/* Left Content */}
        <div className="text-white  space-y-5 mt-25 max-w-lg">
          {/* Typewriter Text */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-xs md:text-xl font-medium"
          >
            <Typewriter
              words={["Hello, I am KM Rejoan Tanjim", "MERN Stack Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>

          {/* Big Title */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl sm:text-4xl text-[#DC2626] md:text-5xl font-extrabold"
          >
            Building Modern & Scalable Web Applications
          </motion.h1>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex space-x-4 text-xl"
          >
            {socials.map(({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-[#DC2626] transition"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Download CV Button */}
          <motion.a
            href="my_cv_old.pdf"
            download
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-[#DC2626] px-5 py-2 hover:bg-[#d30707]  transition-all duration-200  text-white rounded-lg font-semibold shadow-lg"
          >
            Download CV
          </motion.a>
        </div>

        {/* Floating Picture */}
        <motion.img
          src={myPic}
          alt="Profile"
          className="w-[50%]  md:w-[35%] lg:w-[36%] xl:w-[28%] mt-6 xl:mt-10 md:mt-0"
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
            y: [0, -5, 0], // floating idle
          }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 80,
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: [0, 2, -2, 0],
            transition: { duration: 0.6 },
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
