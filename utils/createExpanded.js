import { expandCont } from "./makeExpadedCard.js";
import { evtBackButton } from "./backBtnEvt.js";
import { modeHelper } from "../script.js";
import { bordersBtn } from "./bordersBtnEvt.js";
import { media, sectionNav } from "./variables.js";
import { myData } from "./fetcheData.js";

export function createExpandedCard(country) {
  expandCont(country, myData);
  evtBackButton();
  bordersBtn();
  modeHelper();
  sectionNav.className = "marTop";
  if (media.matches) {
    window.scrollBy({ top: -147 });
  } else {
    window.scrollBy({ top: -560 });
  }
}
