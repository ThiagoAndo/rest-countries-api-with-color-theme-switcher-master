import { makeCards } from "./makeCards.js";

export let evtBackButton = () => {
  let bckBtn = document.querySelector(".btnExp");
  bckBtn.addEventListener("click", () => {
    makeCards("btnCAll");
  });
}
