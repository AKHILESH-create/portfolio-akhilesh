import { FaGithub, FaLinkedin, FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

          <h1 className="text-2xl font-bold">
            Akhilesh
          </h1>

          <div className="flex gap-6 text-lg">
            <a href="#about" className="hover:text-gray-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-gray-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-gray-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-gray-400 transition">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Akhilesh Kumar
          </h1>

          <p className="text-2xl text-gray-400 mb-8">
            Java Developer • DSA Learner • Web Developer
          </p>

          <div className="flex justify-center gap-5">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="bg-white text-black px-7 py-3 rounded-2xl font-semibold hover:scale-110 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              className="border border-gray-600 px-7 py-3 rounded-2xl hover:bg-gray-900 transition"
            >
              LinkedIn
            </a>

          </div>

        </motion.div>

      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-24 px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-5xl font-bold mb-10">
            About Me
          </h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-10 backdrop-blur-lg">

            <p className="text-gray-300 text-lg leading-9">
              I am a B.Tech student passionate about software development,
              Java programming, Data Structures & Algorithms,
              and modern web technologies.
            </p>

            <p className="text-gray-300 text-lg leading-9 mt-5">
              I enjoy building projects and continuously improving my coding skills
              by creating real applications and solving coding problems.
            </p>

          </div>

        </motion.div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-950">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-14">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {["Java", "DSA", "HTML", "CSS", "JavaScript", "Git & GitHub"].map((skill) => (

              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 border border-gray-800 rounded-3xl p-10 text-center shadow-lg"
              >

                <FaJava className="text-5xl mx-auto mb-5" />

                <h3 className="text-2xl font-semibold">
                  {skill}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto py-24 px-6">

        <h2 className="text-5xl font-bold mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Snake Game */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-lg"
          >

            <h3 className="text-3xl font-bold mb-4">
              Snake Game
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              A classic Snake Game built using Java Swing with smooth movement,
              score tracking, collision detection and sound effects.
            </p>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="text-white underline"
            >
              View Project
            </a>

          </motion.div>

          {/* Brick Breaker */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-lg"
          >

            <h3 className="text-3xl font-bold mb-4">
              Brick Breaker Game
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              A Brick Breaker Game developed using Java Swing
              with multiple levels, collision detection and responsive controls.
            </p>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="text-white underline"
            >
              View Project
            </a>

          </motion.div>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-950 py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-10">
            Contact
          </h2>

          <p className="text-xl text-gray-400 mb-10">
            Let's connect and build something amazing together.
          </p>

          <div className="flex justify-center gap-10 text-5xl">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              className="hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;