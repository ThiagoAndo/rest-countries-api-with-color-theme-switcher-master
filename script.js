import { makeAll, content } from "./utils/makeAllCoutries.js";
import { expandCont } from "./utils/makeExpadedCard.js";
import { autocomplete } from "./utils/autoComplete.js";
import { findCountry } from "./utils/findCountry.js";
import { addInputEvt } from "./utils/inputEvt.js";
import { myEvent } from "./utils/btnModeEvt.js";
import { cardEfect } from "./utils/cardsEvt.js";
import { fetchData } from "./utils/fetcheData.js";
import { byRegion } from "./utils/inputByRegionEvt.js";
import { classes } from "./utils/changeClasses.js";
export let myData = {};
export let countries = [];
export let form = document.querySelector("#form");
export const media = window.matchMedia("(min-width: 740px)");
export const btnTxt = document.querySelector("#btn p");
export const sectionNav = document.querySelector("#srch");
export const main = document.querySelector("#main");

export let modeClass = "dark";
export const input = document.querySelector("#form > input");
export const btnMode = document.querySelector("#btn");
export const buttonTxt = document.querySelector("#btn  p");
export const svg = document.querySelector("#btn div:first-of-type");
export const nav = document.querySelector("nav");
export const body = document.querySelector("body");
export const inputSelect = document.querySelector("#formSelec > select");
export const mainTxt = document.querySelector("#mainTxt");

fetchData().then((data) => {
  myData = data;
});

//Adding evt to main txt ================================================
mainTxt.onclick = () => {
  inputSelect.focus();
};

setTimeout(() => {
  makeCards();
}, 400);

addInputEvt();
myEvent("#202c37", "#2b3945 ", "underline white", "none");
cardEfect();
byRegion();

//Printing all cards with their respective country ======================
export function makeCards(call, funReagion) {
  if (call === undefined) {
    makeAll(myData);
  } else if (call === "reg") {
    let ctrRegion = [];
    myData.forEach((country) => {
      if (country.region === funReagion) {
        ctrRegion.push(country);
      }
    });
    makeAll(ctrRegion);
  } else if (call === "btnCAll") {
    main.innerHTML = content;
    sectionNav.className = "marg";
  }

  cardEfect();
}

autocomplete(document.getElementById("myInput"), countries);

btnMode.onclick = () => {
  mode();
};

function mode() {
  if (btnTxt.innerHTML === "Light Mode") {
    btnTxt.innerHTML = "Dark Mode";
    modeClass = "light";
    classes("light", "blight");
    btnMode.style.backgroundColor = "#ffffff";
    myEvent("#fafafa", "#ffffff", "underline black", "none");
    input.classList.add("your-class");
    svg.classList.remove("filt");
  } else {
    btnTxt.innerHTML = "Light Mode";
    modeClass = "dark";
    classes("dark", "bDark");
    input.classList.remove("your-class");
    svg.className = "filt";
    btnMode.style.backgroundColor = "#2b3945";
    myEvent("#202c37", "#2b3945", "underline white", "none");
  }
}

//Addinng effect on the cards when the mouse is over ===============================


export function createExpandedCard(country) {
  expandCont(country, myData);
  evtBackButton();
  bordersBtn();
  modeHelper();
  sectionNav.className = "marTop";
  if (media.matches) {
    window.scrollBy({ top: -147 });
  } else {
    window.scrollBy({ top: -560 });
  }
}

//Adding event to Back button==============================================
function evtBackButton() {
  let bckBtn = document.querySelector(".btnExp");
  bckBtn.addEventListener("click", () => {
    makeCards("btnCAll");
  });
}

//Adding event to borders buttons ==========================================
function bordersBtn() {
  const buttonsBorder = document.querySelectorAll(".selectBorder");
  buttonsBorder.forEach((btn) => {
    btn.addEventListener("click", () => {
      try {
        createExpandedCard(findCountry(btn.innerHTML, myData));
        modeHelper();
      } catch (err) {}
    });
  });
}

export function modeHelper() {
  if (btnTxt.innerHTML === "Light Mode") {
    classes("bDark", "dark", "card");
  } else {
    classes("light", "blight", "card");
  }
}

// function classes(class1, class2, call) {
//   if (call === undefined) {
//     const cards = document.querySelectorAll("article");
//     nav.className = class1;
//     body.className = class2;
//     input.className = class1;
//     inputSelect.className = class1;
//     cards.forEach((card) => {
//       card.className = class1;
//     });
//     classes2();
//   } else {
//     classes2();
//   }

//   function classes2() {
//     try {
//       const expMode = document.querySelector("#expand");
//       const expModeBtn = document.querySelectorAll(".selectBorder");
//       const ModeBtnBack = document.querySelector(".btnExp");
//       btnsExpand(ModeBtnBack);

//       expModeBtn.forEach((btn) => {
//         btnsExpand(btn);
//       });

//       function btnsExpand(obj = {}) {
//         const attr = obj.getAttribute("class");
//         const cls2 = attr.split(" ");
//         obj.classList.remove(cls2[1]);
//         obj.classList.add(class1);
//       }

//       expMode.className = class1;
//     } catch (err) {}
//   }
// }
//============================================================================
