import { findCountry } from "./findCountry.js";
import { createExpandedCard } from "./createExpanded.js";
import { modeHelper } from "./changeClasses.js";
import { myData } from "./fetcheData.js";

//Adding event to borders buttons ==========================================
export let bordersBtn = () => {
  const buttonsBorder = document.querySelectorAll(".selectBorder");
  buttonsBorder.forEach((btn) => {
    btn.addEventListener("click", () => {
      try {
        createExpandedCard(findCountry(btn.id, myData));
        modeHelper();
      } catch (err) {
      }
    });
  });
}
