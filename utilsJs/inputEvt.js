import { input, myData, countries, form} from "../script.js";
import { createExpandedCard } from "../script.js";
import { findCountry } from "./findCountry.js";
let conf;

export function addInputEvt() {
  form.onkeydown = (event) => {
    if (event.key === "Enter") {
      conf = countries.indexOf(input.value);
      if (conf != -1) {
        event.preventDefault();
        createExpandedCard(findCountry(input.value, myData));
        input.value = "";
      } else {
        alert(
          "There is no Country Called : " +
            input.value +
            "\n\nYou can type another name."
        );
      }
    }
  };
}
