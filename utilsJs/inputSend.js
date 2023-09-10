import { input } from "../script";


export function  addInputEvt(){
let form = document.querySelector("#form");
  form.onkeydown = (event) => {
    if (event.key === "Enter") {
      let conf;
      conf = countries.indexOf(input.value);
      if (conf != -1) {
        event.preventDefault();
        createExpandedCard(findCountry(input.value));
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