import { makeAll, content } from "./utilsJs/makeAllCoutries.js";
import { expandCont } from "./utilsJs/makeExpadedCard.js";
import { autocomplete } from "./utilsJs/autoComplete.js";
import { findCountry } from "./utilsJs/findCountry.js";

export let countries = [];
export let modeClass = "dark";
export const input = document.querySelector("#form > input");
export const btnMode = document.querySelector("#btn");
export const buttonTxt = document.querySelector("#btn  p");
export const svg = document.querySelector("#btn div:first-of-type");
export const nav = document.querySelector("nav");
export const body = document.querySelector("body");
export const inputSelect = document.querySelector("#formSelec > select");
export const btnTxt = document.querySelector("#btn p");
export const sectionNav = document.querySelector("#srch");
export const mainTxt = document.querySelector("#mainTxt");
export const x = window.matchMedia("(min-width: 740px)");
export let myData = {};
async function fetchData() {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const dataParse = await data.json();
  return dataParse;
}

fetchData().then((data) => {
  //Adding evt to main txt ================================================
  mainTxt.onclick = () => {
    inputSelect.focus();
  };
  myData = data;
});

setTimeout(() => {
  makeCards();
}, 400);

addInputEvt();
function addInputEvt() {
  let form = document.querySelector("#form");
  form.onkeydown = (event) => {
    if (event.key === "Enter") {
      let conf;
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
//Adding functionality to by-region selection ==================================
inputSelect.addEventListener("change", () => {
  if (inputSelect.value != "all") {
    makeCards("reg", inputSelect.value);
  } else {
    makeCards();
  }
});

//Printing all cards with their respective country ======================
function makeCards(call, funReagion) {
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

//Addinng functionality to Button mode ===============================
addEvent("#202c37", "#2b3945 ", "underline white", "none");

function addEvent(color1, color2, txtType1, txtType2) {
  if (x.matches) {
    btnMode.addEventListener("mouseover", () => {
      btnMode.style.backgroundColor = color1;
      buttonTxt.style.textDecoration = txtType1;
    });
    btnMode.addEventListener("mouseout", () => {
      btnMode.style.backgroundColor = color2;
      buttonTxt.style.textDecoration = txtType2;
    });
  }
}

btnMode.onclick = () => {
  mode();
};

function mode() {
  if (btnTxt.innerHTML === "Light Mode") {
    btnTxt.innerHTML = "Dark Mode";
    modeClass = "light";
    classes("light", "blight");
    btnMode.style.backgroundColor = "#ffffff";
    addEvent("#fafafa", "#ffffff", "underline black", "none");
    input.classList.add("your-class");
    svg.classList.remove("filt");
  } else {
    btnTxt.innerHTML = "Light Mode";
    modeClass = "dark";
    classes("dark", "bDark");
    input.classList.remove("your-class");
    svg.className = "filt";
    btnMode.style.backgroundColor = "#2b3945";
    addEvent("#202c37", "#2b3945", "underline black", "none");
  }
}

//Addinng effect on the cards when the mouse is over ===============================
cardEfect();
function cardEfect() {
  const cards = document.querySelectorAll("article");
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      if (btnTxt.innerHTML === "Light Mode") {
        card.style.boxShadow = "0px 0px 6px 0px white";
      } else {
        card.style.boxShadow = "0px 0px 6px 0px black";
      }
    });
    card.addEventListener("mouseout", () => {
      card.style.boxShadow = "0px 0px 0px 0px";
    });

    //Creating screen with a clicked country expanded =================================
    card.addEventListener("click", () => {
      sectionNav.className = "marTop";
      let thisCountry = findCountry(card.id, myData);
      createExpandedCard(thisCountry);
      modeHelper();
    });
  });
}

//Adding event to search ==========================================
autocomplete(document.getElementById("myInput"), countries);

export function createExpandedCard(country) {
  expandCont(country, myData);
  evtBackButton();
  bordersBtn();
  modeHelper();
  sectionNav.className = "marTop";
  if (x.matches) {
    window.scrollBy({ top: -147 });
  } else {
    window.scrollBy({ top: -560 });

    console.log("y :" + window.pageYOffset);
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

function modeHelper() {
  if (btnTxt.innerHTML === "Light Mode") {
    classes("bDark", "dark", "card");
  } else {
    classes("light", "blight", "card");
  }
}

function classes(class1, class2, call) {
  if (call === undefined) {
    const cards = document.querySelectorAll("article");
    nav.className = class1;
    body.className = class2;
    input.className = class1;
    inputSelect.className = class1;
    cards.forEach((card) => {
      card.className = class1;
    });
    classes2();
  } else {
    classes2();
  }

  function classes2() {
    try {
      const expMode = document.querySelector("#expand");
      const expModeBtn = document.querySelectorAll(".selectBorder");
      const ModeBtnBack = document.querySelector(".btnExp");
      btnsExpand(ModeBtnBack);

      expModeBtn.forEach((btn) => {
        btnsExpand(btn);
      });

      function btnsExpand(obj = {}) {
        const attr = obj.getAttribute("class");
        const cls2 = attr.split(" ");
        obj.classList.remove(cls2[1]);
        obj.classList.add(class1);
      }

      expMode.className = class1;
    } catch (err) {}
  }
}
//============================================================================
