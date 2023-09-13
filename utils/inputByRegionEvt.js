//Adding functionality to by-region selection ==================================
import { inputSelect, makeCards } from "../script.js";

export function byRegion() {
  inputSelect.addEventListener("change", () => {
    if (inputSelect.value != "all") {
      makeCards("reg", inputSelect.value);
    } else {
      makeCards();
    }
  });
}
