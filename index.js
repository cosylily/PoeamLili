function displayPoem(response) {
  let poemText = document.querySelector(".poem");
  new Typewriter(poemText, {
    strings: response.data.answer,
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let poemText = document.querySelector(".poem");
  let searchInput = document.querySelector(".search");
  let apiKey = "3caeb6a7a0144t0bff6oc0e38972db67";
  let prompt = `${searchInput.value}`;
  let context =
    "A great and knowledgeable poet who can make good poems. Please generate appropriate and good, short 4-line poem  in basic HTML. Please follow user's instruction. Present the poem without the word html";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  new Typewriter(poemText, {
    strings: "Generating Poem...",
    autoStart: true,
    delay: 25,
    cursor: "",
  });
  axios.get(apiUrl).then(displayPoem);
}

let title = document.querySelector(".poemTitle");
title.addEventListener("submit", generatePoem);
