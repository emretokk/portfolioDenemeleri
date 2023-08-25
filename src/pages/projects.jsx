import React from "react";
import Header from "../components/header";
import watchMe from "../assets/watchme.png";
import spoti from "../assets/spoti.png";
import trendyol from "../assets/trendyol.png";

/*
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
*/

function Projects() {
  return (
    <div className="w-full h-screen flex flex-col bg-secondary">
      <Header />
      <main className="flex flex-col grow border-t border-black">
        <div className="flex items-center w-10/12 h-1/3 mx-auto">
          <img
            src={watchMe}
            className="h-2/3 w-[240px] md:h-5/6 md:w-[400px] rounded-xl shrink-0"
          />
          <div className="flex flex-col gap-4 grow pl-8">
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
        <div className="flex items-center w-10/12 h-1/3 mx-auto">
          <div className="flex flex-col gap-4 grow ">
            <h2 className="text-2xl md:text-3xl">Klon Projeler</h2>
            <p className="text-sm md:text-base">
              Hazır projelerin benzerlerini yaparak kendimi geliştirmeye
              çalışıyorum. Buradaki örnekte spotify'ın masaüstü uygulamasının
              arayüzünü yapmaya çalışmıştım.
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
          <img
            src={spoti}
            className="h-2/3 w-[240px] md:h-5/6 md:w-[400px] rounded-xl shrink-0"
          />
        </div>
        <div className="flex items-center w-10/12 h-1/3 mx-auto">
          <img
            src={trendyol}
            className="h-2/3 w-[240px] md:h-5/6 md:w-[400px] rounded-xl shrink-0"
          />
          <div className="flex flex-col gap-4 grow pl-8">
            <h2 className="text-2xl md:text-3xl">Trendyol Karanlık Mod</h2>
            <p className="text-sm md:text-base">
              Bu projede Trendyol'a karanlık mod eklemeye çalışmıştım.
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
      </main>
    </div>
  );
}

export default Projects;
