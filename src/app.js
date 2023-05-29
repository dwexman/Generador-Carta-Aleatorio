/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  var pinta = generateRandomPinta();
  var pintaInferior = document.querySelector(".pinta-inferior");
  pintaInferior.innerHTML = pinta;
  var pintaSuperior = document.querySelector(".pinta-superior");
  pintaSuperior.innerHTML = pinta;
  switch (pinta) {
    case "♥":
      pintaInferior.classList.add("rojo");
      pintaSuperior.classList.add("rojo");

    case "♦":
      pintaInferior.classList.add("rojo");
      pintaSuperior.classList.add("rojo");
  }

  document.querySelector(".pinta-superior").innerHTML = pinta;
  document.querySelector(".numero").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let generateRandomPinta = () => {
  var pinta = ["♣", "♥", "♠", "♦"];
  let indexPinta = Math.floor(Math.random() * pinta.length);

  return pinta[indexPinta];
};
