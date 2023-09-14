import { makeCards } from "./makeCards.js";

export let myData = {};
export let gettingData = () => {
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
