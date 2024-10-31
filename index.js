function generatePoem() {
  event.preventDefault();
  let poemText = document.querySelector(".poem");

  new Typewriter(poemText, {
    strings: "Generating Poem...",
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}

let title = document.querySelector(".poemTitle");
title.addEventListener("submit", generatePoem);
