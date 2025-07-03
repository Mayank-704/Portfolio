import { useState } from "react";
import { RxCross2  } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

 const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

function Navigation() {

   

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <button className="nav-link" onClick={()=>{scrollToSection("home")}}>
          Home
        </button>
      </li>
      <li className="nav-li">
        <button className="nav-link" onClick={()=>{scrollToSection("about")}}>
          About
        </button>
      </li>
      <li className="nav-li">
        <button className="nav-link" onClick={()=>{scrollToSection("work")}}>
          Work
        </button>
      </li>
      <li className="nav-li">
        <button className="nav-link" onClick={()=>{scrollToSection("contact")}}>
          Contact
        </button>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <button
            onClick={()=>{scrollToSection("home")}}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            MG
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            {
              isOpen? <RxCross2 size={24} /> : <MdMenu size={24} />
            }
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
