import { input, nav, body, inputSelect,btnTxt } from "./variables.js";
export function classes(class1, class2, call) {
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

export function modeHelper() {
  if (btnTxt.innerHTML === "Light Mode") {
    classes("bDark", "dark", "card");
  } else {
    classes("light", "blight", "card");
  }
}

