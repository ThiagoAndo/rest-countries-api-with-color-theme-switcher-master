import { main } from "./variables.js";
export let expandCont = (country, data) => {
  let expand = "";
  let currencie = "";
  let crr = "";
  let lang = "";
  let lag = "";
  let subReg = "";
  let capital = "";
  let longName = "";
  if (
    country.currencies &&
    country.languages &&
    country.subregion &&
    country.capital
  ) {
    currencie = Object.keys(country.currencies)[0];
    lang = Object.keys(country.languages)[0];
    lag = country.languages[lang];
    crr = country.currencies[currencie].name;
    subReg = country.subregion;
    capital = country.capital;
  } else {
    crr = "No Currencie";
    lag = "Unknow";
    subReg = "No Subregion";
    capital = "No Capital";
  }
  expand +=
    '<section id="expand">' +
    "<div>" +
    '<div class="btnExp dark">' +
    "<span>⬅</span>" +
    "<span>&nbsp&nbspBack</span>" +
    "</div>" +
    '<div id="contExp">' +
    '<div id="flag" style="background-image:' +
    "url(" +
    `${country.flags.png}` +
    ')"' +
    "></div>" +
    '<div id="holdInf">' +
    '<div class="inf">' +
    "<h1>" +
    `${country.name.common}` +
    "</h1>" +
    "<p><strong>Population:&nbsp</strong> " +
    `${country.population}` +
    "</p>" +
    "<p><strong>Region:</strong>&nbsp " +
    `${country.region}` +
    "</p>" +
    "<p><strong>subregion:</strong>&nbsp " +
    `${subReg}` +
    "</p>" +
    "<p><strong>Capital:</strong>&nbsp " +
    `${capital}` +
    "</p>" +
    "</div>" +
    '<div class="inf">' +
    "<h1>&nbsp</h1>" +
    "<p><strong>Top Level Domain:</strong> &nbsp" +
    `${country.tld}` +
    "</p>" +
    "<p><strong>Currencies:</strong>&nbsp " +
    `${crr}` +
    "</p>" +
    "<p><strong>Languages:</strong>&nbsp " +
    `${lag}` +
    "</p>" +
    "</div>" +
    '<div id="border">' +
    "<span id='noBtn'><strong>Border countries:</strong>&nbsp</span>" +
    '<div id="btnBor">';
  if (country.borders) {
    for (let index = 0; index < country.borders.length; index++) {
      let name = findCountryName(country.borders[index], data);
      longName = "";
      if (name.length > 10) {
        for (let index = 0; index <= 10; index++) {
          if (index <= 9) {
            longName += name[index];
          } else if (index == 10) {
            longName += " ...";
          }
        }
        expand +=
          `<span class="selectBorder dark" id ="${name}">` + `${longName}` + "</span>";
      } else {
        expand +=
          `<span class="selectBorder dark" id ="${name}">` +
          `${name}` +
          "</span>";
      }
    }
  }

  expand += "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "</section>";
  main.innerHTML = expand;
};
let findCountryName = (cca3, data) => {
  let count = -1;
  do {
    count++;
  } while (data[count].cca3 != cca3);
  return data[count].name.common;
};
