import React from "react";
import { Link } from "react-router-dom";
import { FaCodePullRequest } from "react-icons/fa6";
import myPdf from "../assets/test.pdf";

function Header() {
  return (
    <header className="w-full h-20 flex shrink-0">
      <div
        id="leftHeader"
        className="sm:w-1/2 h-full flex items-center space-x-8"
      >
        <div className="icon ml-8">
          <Link to={"/"}>
            <FaCodePullRequest className="w-8 h-8 text-black" />
          </Link>
        </div>
      </div>
      <div
        id="rightHeader"
        className="w-1/2 pr-8 h-full flex items-center justify-end space-x-8 whitespace-nowrap"
      >
        <div className="hover:text-lime">
          <Link to={"/projects"}>{"<Projeler />"}</Link>
        </div>
        <div className="hover:text-lime">
          <Link to={"/contact"}>{"<İletişim />"}</Link>
        </div>
        <a href={myPdf} download="emretokCV">
          <button className=" border-2 border-grayLight p-2 rounded-2xl bg-grayDark hover:bg-grayLight hover:border-grayDark shadow shadow-primary">
            CV İndir
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
