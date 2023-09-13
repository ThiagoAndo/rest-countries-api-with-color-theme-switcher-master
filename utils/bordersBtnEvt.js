import { findCountry } from "./findCountry.js";
import { createExpandedCard } from "./createExpanded.js";
import { modeHelper } from "../script.js";
import { myData } from "../script.js";

//Adding event to borders buttons ==========================================
export function bordersBtn() {
  const buttonsBorder = document.querySelectorAll(".selectBorder");
  buttonsBorder.forEach((btn) => {
    btn.addEventListener("click", () => {
      try {
        createExpandedCard(findCountry(btn.innerHTML, myData));
        modeHelper();
      } catch (err) {
        console.log(err);
      }
    });
  });
}