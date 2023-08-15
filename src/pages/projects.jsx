import React from "react";
import Header from "../components/header";
import watchMe from "../assets/watchme.png";
import spoti from "../assets/spoti.png";
import trendyol from "../assets/trendyol.png";

function Projects() {
  return (
    <div className="w-full h-screen flex flex-col bg-secondary">
      <Header />
      <main className="flex flex-col gap-4 border-t border-black h-full w-full">
        <div className="h-1/4 w-10/12 flex mx-auto">
          <img
            src={watchMe}
            alt="watchme"
            className="rounded-xl w-[240px] h-[125px] md:h-auto md:w-auto"
          />
          <div className="ml-8 flex flex-col">
            <h2 className="text-2xl md:text-3xl">watchMe</h2>
            <p className="text-sm md:text-base">
              Bir saat mağazası web tasarımını yapmaya çalıştım. Proje henüz
              bitmiş durumda değil.
            </p>
            <span className=" my-auto whitespace-nowrap text-sm md:text-base1">
              Açık kaynak kodlarına
              <a
                href="https://github.com/emretokk/watchMe"
                className="underline mx-2"
              >
                buradan
              </a>
              ulaşabilirsiniz.
            </span>
          </div>
        </div>
        <div className="h-1/4 w-10/12 flex flex-row-reverse mx-auto bg-slate-300"></div>
      </main>
    </div>
  );
}

export default Projects;
