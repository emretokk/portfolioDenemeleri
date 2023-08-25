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
          <span
            id="typer"
            className="text-base md:text-2xl whitespace-nowrap"
          ></span>
        </div>
      </div>
      <div className="w-2/3 h-full flex flex-col justify-end">
        <h2 className="text-xl mx-auto text-center">
          Bu site hala yapım aşamasında!!
        </h2>
        <div className="flex mx-auto">
          <img
            src={construction}
            alt="construction"
            className="w-[150px] h-[100px] sm:w-[250px] sm:h-[200px] lg:w-[500px] lg:h-[350px]"
          />
          <div className="flex items-center">
            <img
              src={crane}
              alt="crane"
              className="w-16 h-16 sm:w-28 sm:h-28"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
