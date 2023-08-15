import React, { useEffect, useState } from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";
import construction from "../assets/construction.png";
import crane from "../assets/crane.png";

function Content() {
  const [typeCount, setTypeCount] = useState(0);
  let text = "Merhaba, ben Emre Tok.";
  let index = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById("typer").innerHTML = text.substring(0, index);
      index++;
      if (index == 23) {
        index = 0;
        setTimeout(() => {
          setTypeCount(typeCount + 1);
        }, 5000);
        clearInterval(interval);
      }
    }, 150);
  }, [typeCount]);

  return (
    <main className="flex border-t border-black h-full relative">
      <div className="w-1/3 h-full">
        <div id="typingArea" className="mt-20 ml-20 w-fit h-fit">
          <span id="typer" className="text-2xl whitespace-nowrap"></span>
        </div>
      </div>
      <div className="w-2/3 h-full flex flex-col justify-end">
        <div className="w-full h-fit flex flex-grow items-center justify-center gap-4 text-primary">
          <a
            href="https://github.com/emretokk"
            className="hover:text-grayLight transition-colors"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://twitter.com/emre_t0k"
            className="hover:text-grayLight transition-colors"
          >
            <FaTwitter size={40} />
          </a>
          <a
            href="https://www.instagram.com/emre.t0k/"
            className="hover:text-grayLight transition-colors"
          >
            <FaInstagram size={40} />
          </a>
        </div>
        <h2 className="text-xl mx-auto">Burası Hala Yapım Aşamasında!!</h2>
        <div className="flex mx-auto">
          <img
            src={construction}
            alt="construction"
            className="sm:w-[250px] sm:h-[200px] lg:w-[500px] lg:h-[350px]"
          />
          <div className="flex items-center">
            <img src={crane} alt="crane" className="w-28 h-28" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
