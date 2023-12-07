import { makeCards } from "./makeCards.js";
import { main } from "./variables.js";

export let myData = {};
export let gettingData = () => {
  main.innerHTML = "<div class='wait_data'></div>";
  async function fetchData() {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const dataParse = await data.json();
    return dataParse;
  }

  fetchData().then((data) => {
    myData = data;
  });
  setTimeout(() => {
    makeCards();
  }, 400);
};
