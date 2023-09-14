import { modeHelper } from "./changeClasses.js";
import { btnTxt, sectionNav } from "./variables.js";
import { myData } from "./fetcheData.js";
import { createExpandedCard } from "./createExpanded.js";
import { findCountry } from "./findCountry.js";

export let cardEfect = () => {
  const cards = document.querySelectorAll("article");
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      if (btnTxt.innerHTML === "Light Mode") {
        card.style.boxShadow = "0px 0px 6px 0px white";
      } else {
        card.style.boxShadow = "0px 0px 6px 0px black";
      }
    });
    card.addEventListener("mouseout", () => {
      card.style.boxShadow = "0px 0px 0px 0px";
    });

    //Creating screen with a clicked country expanded =================================
    card.addEventListener("click", () => {
      sectionNav.className = "marTop";
      let thisCountry = findCountry(card.id, myData);
      createExpandedCard(thisCountry);
      modeHelper();
    });
  });
}
