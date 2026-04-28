let elem = document.createElement("div");
elem.innerHTML = "<link rel='stylesheet' href='https://yaeanderson.github.io/web-dev/globalheader.css'>"
document.body.prepend(elem);

fetch("https://yaeanderson.github.io/web-dev/globalheader.html")
  .then((output) => output.text())
  .then((text) => {elem.innerHTML = elem.innerHTML + text;})
  .catch((e) => console.error(e));
