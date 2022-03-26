/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#myBtn").addEventListener("click", () => {
    document.querySelector("#domains").innerHTML = generateDomain();
  });
};

let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);

  return pronoun[proIndex] + adj[adjIndex] + noun[nounIndex] + ".com";
};
