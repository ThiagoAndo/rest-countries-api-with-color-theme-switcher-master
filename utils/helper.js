import { classes } from "./changeClasses";
import { mode } from "./modeFun";
import { btnMode} from "./variables";

export function modeHelper() {
 const btnTxt = document.querySelector("#btn p");

  btnMode.onclick = () => {
    mode();
  };
  if (btnTxt.innerHTML === "Light Mode") {
    classes("bDark", "dark", "card");
  } else {
    classes("light", "blight", "card");
  }
}
