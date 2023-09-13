 import { btnMode,buttonTxt, media } from "../script.js";
//Addinng functionality to Button mode ===============================
 export function myEvent(color1, color2, txtType1, txtType2) {
  if (media.matches) {
    btnMode.addEventListener("mouseover", () => {
      btnMode.style.backgroundColor = color1;
      buttonTxt.style.textDecoration = txtType1;
    });
    btnMode.addEventListener("mouseout", () => {
      btnMode.style.backgroundColor = color2;
      buttonTxt.style.textDecoration = txtType2;
    });
  }
}
