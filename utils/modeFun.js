import {
  btnTxt,
  input,
  btnMode,
  svg,
} from "./variables.js";
export let modeClass = "dark";

import { myEvent } from "./btnModeEvt.js";
import { classes } from "./changeClasses.js";

export function mode() {
  if (btnTxt.innerHTML === "Light Mode") {
    btnTxt.innerHTML = "Dark Mode";
    modeClass = "light";
    classes("light", "blight");
    btnMode.style.backgroundColor = "#ffffff";
    myEvent("#fafafa", "#ffffff", "underline black", "none");
    input.classList.add("your-class");
    svg.classList.remove("filt");
  } else {
    btnTxt.innerHTML = "Light Mode";
    modeClass = "dark";
    classes("dark", "bDark");
    input.classList.remove("your-class");
    svg.className = "filt";
    btnMode.style.backgroundColor = "#2b3945";
    myEvent("#202c37", "#2b3945", "underline white", "none");
  }
}
