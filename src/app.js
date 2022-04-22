/* eslint-disable */
// import "bootstrap";
// import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  ///////////////RANDOM LOAD AT START//////////////////
  document.querySelector("#domains").innerHTML = generateDomain();
  ///////////////BUTTON FUNCTION///////////////////////
  document.querySelector("#myBtn").addEventListener("click", () => {
    document.querySelector("#domains").innerHTML = generateDomain();
  });
  ///////////////LIST LOAD////////////////////////////
  document.querySelector("#domainList").innerHTML = combineObjects([
    array1,
    array2,
    array3,
    array4,
    array5
  ]).join(" "); //This removes the comma seperator
};
///////////////BUTTON FUNCTION///////////////////////
let generateDomain = () => {
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "giant", "enormous"];
  let noun = ["wombat", "frog", "monkey"];
  let end = [".com", ".io"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let endIndex = Math.floor(Math.random() * end.length);

  return pronoun[proIndex] + adj[adjIndex] + noun[nounIndex] + end[endIndex];
};

///////////DOMAIN LIST FUNCTION STARTS HERE///////////////////////////////////////////////////////////////////////////////
const array1 = ["the", "our", "my"];
const array2 = ["great", "giant", "enormous"];
const array3 = ["wombat", "frog", "monkey"];
const array4 = [".com", ".io"];
const array5 = ["<br>"]; //This formats it as 1 per line

const combineObjects = ([head, ...[headTail, ...tailTail]]) => {
  if (!headTail) return head;

  const combined = headTail.reduce((acc, x) => {
    return acc.concat(head.map(h => `${h}${x}`));
  }, []);

  return combineObjects([combined, ...tailTail]);
};

console.log(combineObjects([array1, array2, array3, array4, array5]));
