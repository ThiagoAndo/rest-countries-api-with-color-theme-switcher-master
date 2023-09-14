import { makeAll } from "./utils/makeAllCoutries.js";
import { autocomplete } from "./utils/autoComplete.js";
import { countries, sectionNav, main, ctrRegion } from "./utils/variables.js";
import { content } from "./utils/makeAllCoutries.js";
import { addInputEvt } from "./utils/inputEvt.js";
import { myEvent } from "./utils/btnModeEvt.js";
import { cardEfect } from "./utils/cardsEvt.js";
import { gettingData, myData } from "./utils/fetcheData.js";
import { byRegion } from "./utils/inputByRegionEvt.js";
import { myEvts } from "./utils/addEvt.js";

gettingData();
myEvts();
addInputEvt();
myEvent("#202c37", "#2b3945 ", "underline white", "none");
cardEfect();
byRegion();
autocomplete(document.getElementById("myInput"), countries);
