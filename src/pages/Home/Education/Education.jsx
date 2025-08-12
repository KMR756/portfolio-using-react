import React from "react";
import { motion } from "framer-motion";
const Education = () => {
  const educationData = [
    {
      degree: "B.Sc in Computer Science & Engineering",
      institution: "Bangladesh Institute of Science and Technology",
      year: "Graduated",
      description:
        "Focused on software development, algorithms, data structures, and web technologies.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Madaripur College",
      year: "Completed",
      description:
        "Studied science with emphasis on mathematics, physics, and chemistry.",
    },
  ];
  return (
    <div
      id="education"
      className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-5  pt-20 -mt-5"
    >
      <h1 className="text-center mb-12 font-extrabold text-4xl text-[#DC2626]">
        Education
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 hover:bg-gray-700 p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-red-500 transition-all duration-300"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{
              scale: 1.05,
              rotate: [0, 1.5, -1.5, 0],
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <h2 className="text-xl font-bold text-[#DC2626]">{edu.degree}</h2>
            <p className="text-gray-400">{edu.institution}</p>
            <p className="text-sm text-gray-500 mb-3">{edu.year}</p>
            <p className="text-gray-300">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
