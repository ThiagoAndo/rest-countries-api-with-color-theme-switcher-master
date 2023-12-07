import { mode } from "./modeFun.js";
import { mainTxt, inputSelect, btnMode, media } from "./variables.js";

export let addEvt = () => {
  mainTxt.onclick = () => {
    inputSelect.focus();
    console.log(media.matches);
    const inteOne = setInterval(() => {
      inputSelect.blur();
    }, 1000);

    const inteTwo = setInterval(() => {
      inputSelect.focus();
    }, 2000);

    inputSelect.onclick = () => {
      clearInterval(inteOne);
      clearInterval(inteTwo);
    };
  };
  btnMode.onclick = () => {
    mode();
  };
};
