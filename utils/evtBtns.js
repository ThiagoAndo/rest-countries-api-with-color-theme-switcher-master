import { mode } from "./modeFun.js";
import { mainTxt, inputSelect,btnMode } from "./variables.js";
export function addEvt(){
  mainTxt.onclick = () => {
    inputSelect.focus();
  };
  btnMode.onclick = () => {
    mode();
  };
}