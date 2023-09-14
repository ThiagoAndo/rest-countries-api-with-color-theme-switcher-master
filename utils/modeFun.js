import { btnTxt, input, btnMode, svg } from "./variables.js";
import { myEvent } from "./btnModeEvt.js";
import { classes } from "./changeClasses.js";

export let modeClass = "dark";
export let mode = () =>  {
  if (btnTxt.innerHTML === "Light Mode") {
    btnTxt.innerHTML = "Dark Mode";
    modeClass = "light";
    btnMode.style.backgroundColor = "#ffffff";
    input.classList.add("your-class");
    svg.classList.remove("filt");
    classes("light", "blight");
    myEvent("#fafafa", "#ffffff", "underline black", "none");
    
  } else {
    btnTxt.innerHTML = "Light Mode";
    modeClass = "dark";
    svg.className = "filt";
    btnMode.style.backgroundColor = "#2b3945";
    input.classList.remove("your-class");
    classes("dark", "bDark");
    myEvent("#202c37", "#2b3945", "underline white", "none");
  }
};
