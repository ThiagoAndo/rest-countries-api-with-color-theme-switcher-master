import { makeAll, content } from "./makeAllCoutries.js";
import { sectionNav, main, ctrRegion } from "./variables.js";
import { cardEfect } from "./cardsEvt.js";
import { myData } from "./fetcheData.js";


//Printing all cards with their respective country ======================
export let makeCards = (call, funReagion) => {
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
