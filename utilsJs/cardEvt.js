import { sectionNav, modeHelper, btnTxt } from "../script";
import { createExpandedCard } from "../script";
import { findCountry } from "./findCountry";

export function cardEfect() {
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