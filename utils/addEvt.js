import { mode } from "./modeFun.js";
import { mainTxt, btnMode, inputSelect } from "./variables.js";

export let myEvts = () => {
  mainTxt.onclick = () => {
    inputSelect.focus();

    
    const interOne = setInterval(() => {
      inputSelect.blur();
    }, 1000);
    const interTwo = setInterval(() => {
      inputSelect.focus();
    }, 2000);

    inputSelect.onclick = () => {
      clearInterval(interOne);
      clearInterval(interTwo);
    };
  };
  btnMode.onclick = () => {
    mode();
  };
};
