import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaHandPointRight } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import doTogether from "../../../assets/doTogether.png";
import hobbyPoint from "../../../assets/hobbyPoint.png";
import stackSpace from "../../../assets/stackSpace.png";

const Project = () => {
  const projectData = [
    {
      title: "doTogether",
      description:
        "DoTogether is a community-focused platform that enables users to create, join, and track local social and environmental events, fostering civic participation and collective action.",
      feature: [
        "Event Creation & Management: Easily organize and manage local community service events.",
        "Join & Track Participation: Users can join events and track their involvement and impact.",
        "Community Engagement: Connects like-minded individuals to promote grassroots collaboration and social good.",
      ],
      tech: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
      ],
      image: doTogether,
      link: "https://do-together-743ba.web.app/",
      GitLink: "https://github.com/KMR756/dotogether-client",
    },
    {
      title: "hobbyPoint",
      description:
        "HobbyPoint is a lively community platform where users can find, join, and start local hobby groups, fostering connections around shared interests and activities.",
      feature: [
        "Group Discovery & Creation: Easily find and create hobby groups like book clubs, hiking teams, and art circles.",
        "Community Engagement: Connect with people who share your passions and build meaningful relationships.",
        "Event & Activity Management: Organize and participate in hobby events to enjoy activities together.",
      ],
      tech: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
      ],
      image: hobbyPoint,
      link: "https://hobby-point-app.web.app/",
      GitLink: "https://github.com/KMR756/hobbypint-client",
    },
    {
      title: "StackSpace",
      description:
        "stackSpace is a MERN stack forum where users can post, vote, and comment to engage in meaningful conversations within a vibrant community.",
      feature: [
        "User Authentication & Membership: Secure sign-up/login with tiered membership options to unlock premium forum capabilities.",
        "Post, Vote & Comment System: Users can create posts, vote, and comment, encouraging active participation and meaningful discussions.",
        "Real-time Updates & Responsive Design: Instant interaction updates with a mobile-friendly interface ensuring seamless access on any device.",
      ],
      tech: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
      ],
      image: stackSpace,
      link: "https://stack-space-2daaf.web.app/",
      GitLink: "https://github.com/KMR756/stackSpace-client",
    },
  ];

  return (
    <div
      id="project"
      className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-20"
    >
      <h1 className="text-center mb-12 font-extrabold text-4xl text-[#DC2626]">
        Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-3xl shadow-lg border border-gray-700 hover:border-red-500 overflow-hidden transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
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
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-[#DC2626] mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              {project.feature && (
                <ul className="list-none space-y-2 mb-4">
                  {project.feature.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs text-white hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <FaHandPointRight className="text-[#DC2626] mr-2 text-lg flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 hover:bg-[#DC2626] text-gray-200 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                {project.GitLink && (
                  <a
                    href={project.GitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-2 bg-[#DC2626] px-4 py-2 rounded-lg hover:bg-red-700 text-center transition-colors"
                  >
                    <FaGithub />
                    Github
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-2 bg-[#DC2626] px-4 py-2 rounded-lg hover:bg-red-700 text-center transition-colors"
                >
                  <IoEyeSharp />
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
