import { makeAll } from "./utils/makeAllCoutries.js";
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
import { content } from "./utils/makeAllCoutries.js";
import { addInputEvt } from "./utils/inputEvt.js";
import { myEvent } from "./utils/btnModeEvt.js";
import { cardEfect } from "./utils/cardsEvt.js";
import { gettingData, myData } from "./utils/fetcheData.js";
import { byRegion } from "./utils/inputByRegionEvt.js";
import { classes } from "./utils/changeClasses.js";
import { myEvts } from "./utils/addEvt.js";
gettingData();
//Adding evt to main txt ================================================

myEvts();


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

export function modeHelper() {
  if (btnTxt.innerHTML === "Light Mode") {
    classes("bDark", "dark", "card");
  } else {
    classes("light", "blight", "card");
  }
}
