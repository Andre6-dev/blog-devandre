import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MoonIcon, SunIcon } from "../Icons";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav
        className="
          w-max
          py-3
          px-8
          border border-solid border-dark
          rounded-full font-medium capitalize
          text-lg
          flex items center
          fixed top-6 right-1/2 translate-x-1/2
          bg-light/80 backdrop-blur-sm
      "
      >
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/about" className="mr-4">
          About
        </Link>
        <Link href="/contact" className="mr-4">
          Contact
        </Link>
        <button>
          <SunIcon className="w-6 h-6" />
        </button>
      </nav>
      <div>
        <a href="#" className="inline-block w6 h-6 mr-4">
          <FaLinkedin
            color="blue"
            className="hover:scale-125 transition-all ease duration-200"
            size={32}
          />
        </a>
        <a href="#" className="inline-block w6 h-6 mr-4">
          <FaGithub
            className="hover:scale-125 transition-all ease duration-200"
            size={32}
          />
        </a>
        <a href="#" className="inline-block w6 h-6 mr-4">
          <FaTwitter
            color="#1DA1F2"
            className="hover:scale-125 transition-all ease duration-200"
            size={32}
          />
        </a>
        <a href="#" className="inline-block w6 h-6 mr-4">
          <FaDribbble
            color="#EA4C89"
            className="hover:scale-125 transition-all ease duration-200"
            size={32}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
