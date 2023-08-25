import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import dino from "../assets/dino.gif";
import tree from "../assets/tree.png";

const myLinks = {
  github: "https://github.com/emretokk",
  twitter: "https://twitter.com/emre_t0k",
  instagram: "https://www.instagram.com/emre.t0k/",
};

function Contact() {
  return (
    <div className="w-screen h-screen flex flex-col bg-primary">
      <Header />
      <main className="flex flex-col border-t border-black text-grayLight h-full w-full">
        <div className="h-1/3 w-full flex">
          <div className="w-5/6 h-2/3 border-grayLight border-b relative">
            <img
              src={tree}
              alt="tree"
              className={`absolute bottom-0 right-0`}
            />
            <img
              src={dino}
              alt="dino"
              className="w-24 h-24 absolute bottom-0"
            />
          </div>
          <a
            href={myLinks.github}
            className="flex w-1/6 items-center hover:text-lime"
          >
            <FaGithub className="mr-4 w-12 h-12" />
            <span className="text-3xl">Github</span>
          </a>
        </div>
        <div className="h-1/3 items-center flex flex-row-reverse">
          <a
            href={myLinks.instagram}
            className="flex w-1/6 items-center hover:text-lime"
          >
            <FaInstagram className="mr-4 w-12 h-12" />
            <span className="text-3xl">Instagram</span>
          </a>
        </div>
        <div className="h-1/3 items-center flex flex-row-reverse">
          <a
            href={myLinks.twitter}
            className="flex w-1/6 items-center hover:text-lime"
          >
            <FaTwitter className="mr-4 w-12 h-12" />
            <span className="text-3xl">Twitter</span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Contact;
