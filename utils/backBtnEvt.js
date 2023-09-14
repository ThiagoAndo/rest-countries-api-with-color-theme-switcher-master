import { makeCards } from "./makeCards.js";

export function evtBackButton() {
  let bckBtn = document.querySelector(".btnExp");
  bckBtn.addEventListener("click", () => {
    makeCards("btnCAll");
  });
}
