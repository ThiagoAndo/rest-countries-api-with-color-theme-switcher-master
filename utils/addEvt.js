import { mode } from "./modeFun.js";
import { mainTxt,btnMode,inputSelect} from "./variables.js";


export function myEvts() {
  mainTxt.onclick = () => {
    inputSelect.focus();
  };
  btnMode.onclick = () => {
    mode();
  };
}
