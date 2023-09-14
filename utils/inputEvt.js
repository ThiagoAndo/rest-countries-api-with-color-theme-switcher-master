import { countries, input } from "./variables.js";
import { myData } from "./fetcheData.js";
import { createExpandedCard } from "./createExpanded.js";
import { findCountry } from "./findCountry.js";
let conf;

export let addInputEvt = () => {
  form.onkeydown = (event) => {
    if (event.key === "Enter") {
      conf = countries.indexOf(input.value);
      if (conf != -1) {
        event.preventDefault();
        createExpandedCard(findCountry(input.value, myData));
        input.value = "";
      } else {
        alert(
          `There is no Country Called : ${input.value}

You can type another name.`
        );
      }
    }
  };
}
