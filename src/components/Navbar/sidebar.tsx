import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const logo = new URL("../../assets/logo.png", import.meta.url).href;

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuSlideIn = {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  };

  const menuSlideOut = {
    opacity: 0,
    x: 100,
    transition: { duration: 0.2 },
  };

  return (
    <>
      {!isMenuOpen && (
        <div className="flex items-center gap-8 md:hidden z-50">
          <button className="bg-[#fEF6EF] px-5 py-2 text-[#353342] rounded-lg font-semibold hover:opacity-60 transition-opacity cursor-point">
            Get Started
          </button>
          <FaBars
            size={27}
            color="#FFD803"
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      )}

      <motion.nav
        initial={isMenuOpen ? menuSlideIn : menuSlideOut}
        animate={isMenuOpen ? menuSlideIn : menuSlideOut}
        variants={{ open: menuSlideIn, closed: menuSlideOut }}
        className={`fixed bg-[#353342] font-bold top-0 z-40 right-0 p-6  md:hidden left-0 rounded-lg bottom-0`}
      >
        <div className="flex items-center justify-between px-1 pt-5">
          <img src={logo} alt="logo" className="w-10" />
          <button
            onClick={toggleMenu}
            className="text-3xl bg-[#3C3B48] rounded-full px-3 pb-2 font-light text-[#FDD803] shadow-sm"
          >
            x
          </button>
        </div>
        <div className="flex flex-col items-center gap-20 mt-20 text-[#FFFFFF] text-xl">
          <a
            className={`link hover:opacity-60 ${
              activeNav === "#" ? "text-blue-500" : ""
            }`}
            onClick={() => {
              setActiveNav("#");
              toggleMenu();
            }}
            href="#"
          >
            Home
          </a>
          <a
            className={`link hover:opacity-60 ${
              activeNav === "#about" ? "text-blue-500" : ""
            }`}
            onClick={() => {
              setActiveNav("#about");
              toggleMenu();
            }}
            href="#about"
          >
            About
          </a>
          <a
            className={`link hover:opacity-60 ${
              activeNav === "#services" ? "text-blue-500" : ""
            }`}
            onClick={() => {
              setActiveNav("#services");
              toggleMenu();
            }}
            href="#services"
          >
            Services
          </a>
          <a
            className={`link hover:opacity-60 ${
              activeNav === "#careers" ? "text-blue-500" : ""
            }`}
            onClick={() => {
              setActiveNav("#careers");
              toggleMenu();
            }}
            href="#careers"
          >
            Careers
          </a>
          <a
            className={`link hover:opacity-60 ${
              activeNav === "#contact" ? "text-blue-500" : ""
            }`}
            onClick={() => {
              setActiveNav("#contact");
              toggleMenu();
            }}
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center mt-20">
          <button className="bg-[#fEF6EF] px-5 py-2 text-[#353342] rounded-lg font-semibold hover:opacity-60 transition-opacity">
            Get Started
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Sidebar;
