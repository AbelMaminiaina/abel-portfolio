import { useEffect } from "react";
import resume from "../assets/resume.pdf"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            abel<span className="text-teal-500">.stack</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 font-mono hove:text-white transition-colors hover:text-teal-500"
            >
              {" "}
              <span className="text-teal-500">01.</span>{" "}A propos{" "}
            </a>
            <a
              href="#experience"
              className="text-gray-300 font-mono hove:text-white transition-colors hover:text-teal-500"
            >
              {" "}
              <span className="text-teal-500">02.</span>{" "}Expérience{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 font-mono hove:text-white transition-colors hover:text-teal-500"
            >
              {" "}
              <span className="text-teal-500">03.</span>{" "}Projets{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 font-mono hove:text-white transition-colors hover:text-teal-500"
            >
              {" "}
              <span className="text-teal-500">04.</span>{" "}
              Contact{" "}
            </a>
              {/* <a href={resume} download="resume"                
                className="border border-teal-500/50 text-teal-500 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-teal-500/10"
              >
                Voir mon CV
              </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
