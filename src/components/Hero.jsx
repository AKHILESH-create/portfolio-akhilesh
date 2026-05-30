import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0B1120] px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Akhilesh Kumar
        </h2>

        <div className="text-yellow-400 text-xl md:text-3xl font-semibold mb-6">
          <TypeAnimation
            sequence={[
              "Java Developer",
              2000,
              "Open Source Contributor",
              2000,
              "DSA Learner",
              2000,
              "Web Developer",
              2000,
            ]}
            repeat={Infinity}
          />
        </div>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
          Computer Science Engineering Student at CV Raman Global University,
          passionate about Java Development, Open Source, DSA,
          Machine Learning and Web Development.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="https://github.com/AKHILESH-create"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            <FaGithub className="inline mr-2" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/akhilesh-kumar-29678a310"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            <FaLinkedin className="inline mr-2" />
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/Akhilesh_kr11/"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            <FaCode className="inline mr-2" />
            LeetCode
          </a>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;