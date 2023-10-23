import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center justify-evenly bg-[#0F0416] text-white flex-wrap px-3 py-4">
      <p className="text-sm font-semibold text-center m-2">
        by Christofora Diana Yuliawati
      </p>
      <p className="text-sm font-semibold text-center m-2">
        <span className="mx-4"></span>
        Copyright &copy; {new Date().getFullYear()}
        &nbsp; - &nbsp;
        <span>All Rights Reserved.</span>
      </p>
      <span className="flex items-center justify-center gap-7 m-2">
        <a
          href="https://github.com/christoforadiana"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/christoforadiana/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/christoforadiana/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <AiFillInstagram />
        </a>
      </span>
    </div>
  );
};

export default Footer;
