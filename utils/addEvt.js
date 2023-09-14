import { mode } from "./modeFun.js";
import { mainTxt, btnMode, inputSelect } from "./variables.js";

export let myEvts = () => {
  mainTxt.onclick = () => {
    inputSelect.focus();
  };
  btnMode.onclick = () => {
    mode();
  };
};
