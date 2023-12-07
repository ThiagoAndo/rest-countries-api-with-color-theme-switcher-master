import { autocomplete } from "./utils/autoComplete.js";
import { countries } from "./utils/variables.js";
import { addInputEvt } from "./utils/inputEvt.js";
import { myEvent } from "./utils/btnModeEvt.js";
import { cardEfect } from "./utils/cardsEvt.js";
import { gettingData } from "./utils/fetcheData.js";
import { byRegion } from "./utils/inputByRegionEvt.js";
import { myEvts } from "./utils/addEvt.js";

gettingData();
myEvts();
addInputEvt();
myEvent("#202c37", "#2b3945 ", "underline white", "none");
cardEfect();
byRegion();
autocomplete(document.getElementById("myInput"), countries);
