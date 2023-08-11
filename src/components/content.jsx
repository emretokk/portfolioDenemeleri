import React, { useEffect } from "react";

function Main() {
  let text = "Merhaba, ben Emre Tok.";
  let index = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById("typer").innerHTML += text.charAt(index);
      index++;
      console.log("i runned");
      if (index == 22) {
        clearInterval(interval);
      }
    }, 200);
  }, []);

  return (
    <main className="border-t border-black h-screen relative">
      <div
        id="typingArea"
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[1200px] h-96"
      >
        <span id="typer"></span>
      </div>
    </main>
  );
}

export default Main;
