// import { mySocials } from "../constants";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space h-[20vh]">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
          <a href="https://github.com/Mayank-704">
          <FaGithub size={24} className="hover:scale-130"/>
          </a>
          <a href="">
            <FaLinkedin size={24} className="hover:scale-130"/>
          </a>
          <a href="">
            <FaWhatsapp size={24} className="hover:scale-130"/>
          </a>

      </div>
      <p>© 2025 Mayank. Portfolio inspired by <a className="cursor-pointer" href="https://www.linkedin.com/in/ali-sanati/">Ali Sanati</a></p>
    </section>
  );
};

export default Footer;
