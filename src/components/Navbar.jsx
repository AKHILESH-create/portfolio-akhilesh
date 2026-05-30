import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-yellow-400">
          Akhilesh Kumar
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-yellow-400 transition duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#111827] text-white px-6 py-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 hover:text-yellow-400"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;