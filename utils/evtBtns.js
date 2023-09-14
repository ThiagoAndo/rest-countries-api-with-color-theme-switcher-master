import { mode } from "./modeFun.js";
import { mainTxt, inputSelect, btnMode } from "./variables.js";

export let addEvt = () => {
  mainTxt.onclick = () => {
    inputSelect.focus();
  };
  btnMode.onclick = () => {
    mode();
  };
};
