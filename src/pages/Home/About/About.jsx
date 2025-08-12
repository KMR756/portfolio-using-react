import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div
      id="about"
      className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-5  pt-20 -mt-5"
    >
      <h1 className="text-center mb-12 font-extrabold text-4xl text-[#DC2626]">
        About Me
      </h1>

      <motion.div
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-xl p-8 md:p-16 flex flex-col gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="text-white text-xs lg:text-lg leading-relaxed rounded-3xl bg-gray-800 hover:bg-gray-600 transition-all duration-200 p-8 shadow-lg"
          variants={fadeInUp}
        >
          Hello! <strong>I’m KM Rejoan Tanjim,</strong> a passionate MERN Stack
          Developer based in Dhaka, Bangladesh. Originally from Madaripur, I
          completed my graduation with a Bachelor of Computer Science (BSc in
          CSE) from Bangladesh Institute of Science and Technology, affiliated
          with the National University.
        </motion.p>

        <motion.p
          className="text-white text-xs lg:text-lg leading-relaxed rounded-3xl bg-gray-800 hover:bg-gray-600 transition-all duration-200 p-8 shadow-lg"
          variants={fadeInUp}
        >
          Technology fascinates me — I love exploring new tools, frameworks, and
          trends in the software world to continuously grow my skills. As a
          full-stack developer, I specialize in building modern, responsive web
          applications using MongoDB, Express.js, React, and Node.js.
        </motion.p>

        <motion.p
          className="text-white text-xs lg:text-lg leading-relaxed rounded-3xl bg-gray-800 hover:bg-gray-600 transition-all duration-200 p-8 shadow-lg"
          variants={fadeInUp}
        >
          I enjoy crafting seamless user experiences and writing clean,
          maintainable code. Whether it’s developing dynamic front-end
          interfaces or building robust backend systems, I am driven by the
          challenge of turning ideas into reality through technology.
        </motion.p>

        <motion.p
          className="text-white text-xs lg:text-lg leading-relaxed rounded-3xl bg-gray-800 hover:bg-gray-600 transition-all duration-200 p-8 shadow-lg"
          variants={fadeInUp}
        >
          When I’m not coding, I’m always eager to learn about the latest
          innovations and improve my craft. My goal is to contribute to
          impactful projects that solve real-world problems and push the
          boundaries of what technology can do.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
