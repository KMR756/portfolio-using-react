import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ];

  return (
    <div
      id="skills"
      className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-5  pt-20 -mt-5 "
    >
      <h1 className="text-center mb-12 font-extrabold text-4xl text-[#DC2626]">
        Skills
      </h1>
      <div className="bg-gray-900 py-10 rounded-3xl overflow-hidden">
        <Marquee
          className="marquee-container"
          pauseOnHover
          gradient={false}
          speed={60}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-gray-700 hover:bg-gray-500 p-10 rounded-2xl items-center mx-8 overflow-hidden "
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                scale: 1.15,
                rotate: [0, 2, -2, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <p className="text-white mt-2 text-sm">{skill.name}</p>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
