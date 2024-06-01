import { useState } from "react";
import Sidebar from "./sidebar";
import { scrollToTop } from "../../utils/scrollToTop";

const logo = new URL("../../assets/logo.png", import.meta.url).href;

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="bg-[#353342] p-5 md:px-20  fixed left-0 shadow-sm right-0 top-0 flex items-center justify-between z-50">
      <img src={logo} alt="logo" className="w-10" />
      <Sidebar />
      <div className="hidden md:block">
        <div className="flex flex-wrap items-center gap-10 lg:gap-16 text-[#FFFFFF]">
          <a
            className={`link hover:opacity-60 ${
              activeNav === "#" ? "text-blue-500" : ""
            }`}
            onClick={() => {
              setActiveNav("#");
              scrollToTop();
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
              scrollToTop();
            }}
            href="#about"
          >
            About
          </a>
          <a
            className={`link hover:opacity-60 ${
              activeNav === "#services" ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveNav("#services")}
            href="#services"
          >
            Services
          </a>
          <a
            className={`link hover:opacity-60 ${
              activeNav === "#careers" ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveNav("#careers")}
            href="#careers"
          >
            Careers
          </a>
          <a
            className={`link hover:opacity-60 ${
              activeNav === "#contact" ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveNav("#contact")}
            href="#contact"
          >
            Contact
          </a>
          <div className="flex justify-center">
            <button className="bg-[#fEF6EF] px-5 py-2 text-[#353342] rounded-lg font-semibold hover:opacity-60 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
