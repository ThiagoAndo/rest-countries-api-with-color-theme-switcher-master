import { countries, main } from "./variables.js";
import { mode } from "./modeFun.js";

export let content = "";
let myCls = "";
import { btnTxt } from "./variables.js";
/*This function will  sorte the coutries by alphabetic order and 
print them. It also will print countries by region.*/

export function makeAll(dataPassed) {
  //Sorting the cards by aphabetic order ==================================
  dataPassed.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  content = "";
  if (btnTxt.innerHTML === "Light Mode") {
    myCls = "dark";
  } else {
    myCls = "light";
  }
  dataPassed.forEach((country) => {
    countries.push(country.name.common);
    content +=
      " <article class=" +
      `${myCls}` +
      " id='" +
      `${country.name.common}` +
      "'>" +
      "<div style='background-image:" +
      "url(" +
      `${country.flags.png}` +
      ")'" +
      ">" +
      "</div>" +
      "<div>" +
      "<div class='infoBox'>" +
      "<h3>" +
      `${country.name.common}` +
      "</h3>" +
      "<p><strong>Population:</strong>&nbsp " +
      `${country.population}` +
      "</p>" +
      "<p><strong>Region:</strong>&nbsp " +
      `${country.region}` +
      "</p>" +
      "<p><strong>Capital:</strong>&nbsp " +
      `${country.capital}` +
      "</p>" +
      "</div>" +
      "</div>" +
      "</article>";
  });
  main.innerHTML = content;
}
