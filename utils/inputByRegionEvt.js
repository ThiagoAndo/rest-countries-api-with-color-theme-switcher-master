//Adding functionality to by-region selection ==================================
import { makeCards } from "../script.js";
import { inputSelect } from "./variables.js";
export function byRegion() {
  inputSelect.addEventListener("change", () => {
    if (inputSelect.value != "all") {
      makeCards("reg", inputSelect.value);
    } else {
      makeCards();
    }
  });
}
