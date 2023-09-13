import { makeAll, content } from "./utils/makeAllCoutries.js";
import { autocomplete } from "./utils/autoComplete.js";
import {
  countries,
  btnTxt,
  sectionNav,
  main,
  ctrRegion,
  btnMode,
  inputSelect,
  mainTxt,
} from "./utils/variables.js";
import { addInputEvt } from "./utils/inputEvt.js";
import { myEvent } from "./utils/btnModeEvt.js";
import { cardEfect } from "./utils/cardsEvt.js";
import { fetchData } from "./utils/fetcheData.js";
import { byRegion } from "./utils/inputByRegionEvt.js";
import { classes } from "./utils/changeClasses.js";
import { mode } from "./utils/modeFun.js";
export let myData = {};

fetchData().then((data) => {
  myData = data;
});

//Adding evt to main txt ================================================
mainTxt.onclick = () => {
  inputSelect.focus();
};

setTimeout(() => {
  makeCards();
}, 400);

addInputEvt();
myEvent("#202c37", "#2b3945 ", "underline white", "none");
cardEfect();
byRegion();
autocomplete(document.getElementById("myInput"), countries);

//Printing all cards with their respective country ======================
export function makeCards(call, funReagion) {
  if (call === undefined) {
    makeAll(myData);
  } else if (call === "reg") {
    ctrRegion.length = 0;
    myData.forEach((country) => {
      if (country.region === funReagion) {
        ctrRegion.push(country);
      }
    });
    makeAll(ctrRegion);
  } else if (call === "btnCAll") {
    main.innerHTML = content;
    sectionNav.className = "marg";
  }

  cardEfect();
}
btnMode.onclick = () => {
  mode();
};

export function modeHelper() {
  if (btnTxt.innerHTML === "Light Mode") {
    classes("bDark", "dark", "card");
  } else {
    classes("light", "blight", "card");
  }
}
