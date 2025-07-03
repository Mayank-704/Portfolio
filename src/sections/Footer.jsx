// import { mySocials } from "../constants";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-center md:justify-between gap-5 pb-3 text-sm text-neutral-400 c-space h-[20vh]" id="contact">
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
          <a href="https://www.linkedin.com/in/mayank-gupta-03971a294">
            <FaLinkedin size={24} className="hover:scale-130"/>
          </a>
          <a href="https://x.com/_Mayank_704">
            <FaXTwitter size={24} className="hover:scale-130"/>
          </a>
          <a href="mailto:gupta.mayank.tech@gmail.com">
             <IoMail size={24} className="hover:scale-130"/>
          </a>
      </div>
      <p>© 2025 Mayank. Portfolio inspired by <a className="cursor-pointer" href="https://www.linkedin.com/in/ali-sanati/">Ali Sanati</a></p>
    </section>
  );
};

export default Footer;
