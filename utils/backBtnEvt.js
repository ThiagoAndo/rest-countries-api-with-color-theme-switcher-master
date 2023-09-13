import { makeCards } from "../script.js";

export function evtBackButton() {
  let bckBtn = document.querySelector(".btnExp");
  bckBtn.addEventListener("click", () => {
    makeCards("btnCAll");
  });
}
