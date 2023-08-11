import React, { useEffect, useState } from "react";

function Main() {
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
