window.addEventListener("load", () => {
  const btnMode = document.querySelector("#btn");
  const buttonTxt = document.querySelector("#btn  p");
  const svg = document.querySelector("#btn div:first-of-type");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  let form = document.querySelector("#form");
  const input = document.querySelector("#form > input");
  const inputSelect = document.querySelector("#formSelec > select");
  const placeholder = document.querySelector("#form > input::placeholder");
  const btnTxt = document.querySelector("#btn p");
  const sectionNav = document.querySelector("#srch");
  let countries = [];
  let modeClass = "dark";
  let myData = {};

  async function fetchData() {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const dataParse = await data.json();
    return dataParse;
  }

  fetchData().then((data) => {
    myData = { ...data };

    //Sorting the cards by aphabetic order ==========================
    data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));

    //Printing all cards with their respective country ==========================
    let content = "";
    let main = document.querySelector("#main");

    makeCards();
    function makeCards(call) {
      if (call != "btnCAll") {
        data.forEach((country) => {
          countries.push(country.name.common);
          content +=
            " <article class='dark' id='" +
            `${country.name.common}` +
            "'>" +
            "<div style='background-image:" +
            "url(" +
            `${country.flags.png}` +
            ")'" +
            ">" +
            "</div>" +
            "<div>" +
            "<div class='infoBox'>" +
            "<h3>" +
            `${country.name.common}` +
            "</h3>" +
            "<p>Population:&nbsp " +
            `${country.population}` +
            "</p>" +
            "<p>Region:&nbsp " +
            `${country.region}` +
            "</p>" +
            "<p>Capital:&nbsp " +
            `${country.capital}` +
            "</p>" +
            "</div>" +
            "</div>" +
            "</article>";
        });
        main.innerHTML = content;
      } else {
        main.innerHTML = content;
        sectionNav.className = "marg";
      }
      cardEfect();
    }

    //Addinng functionality to Button mode ===============================
    addEvent("#202c37", "#2b3945 ", "underline black", "none");

    function addEvent(color1, color2, txtType1, txtType2) {
      btnMode.addEventListener("mouseover", () => {
        btnMode.style.backgroundColor = color1;
        buttonTxt.style.textDecoration = txtType1;
      });
      btnMode.addEventListener("mouseout", () => {
        btnMode.style.backgroundColor = color2;
        buttonTxt.style.textDecoration = txtType2;
      });
    }

    btnMode.onclick = () => {
      mode();
    };

    function mode() {
      "user strict";
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
          let thisCountry = findCountry(card.id);
          createExpandedCard(thisCountry);
          modeHelper();
        });
      });
    }

    function modeHelper() {
      if (btnTxt.innerHTML === "Light Mode") {
        classes("dark", "bDark", "card");
      } else {
        classes("light", "blight", "card");
      }
    }

    function findCountry(country) {
      let count = -1;
      do {
        count++;
      } while (data[count].name.common != country);
      return data[count];
    }

    function createExpandedCard(country) {
      let expand = "";
      let currencie = "";
      let crr = "";
      let lang = "";
      let lag = "";
      let subReg = "";
      let capital = "";
      if (
        country.currencies &&
        country.languages &&
        country.subregion &&
        country.capital
      ) {
        currencie = Object.keys(country.currencies)[0];
        lang = Object.keys(country.languages)[0];
        lag = country.languages[lang];
        crr = country.currencies[currencie].name;
        subReg = country.subregion;
        capital = country.capital;
      } else {
        crr = "No Currencie";
        lag = "Unknow";
        subReg = "No Subregion";
        capital = "No Capital";
      }

      expand +=
        '<section id="expand" class="bDark">' +
        "<div>" +
        '<div class="btnExp dark">' +
        "<span>⬅️&nbsp&nbspBack</span>" +
        "</div>" +
        '<div id="contExp">' +
        '<div id="flag" style="background-image:' +
        "url(" +
        `${country.flags.png}` +
        ')"' +
        "></div>" +
        '<div id="holdInf">' +
        '<div class="inf">' +
        "<h1>" +
        `${country.name.common}` +
        "</h1>" +
        "<p>Population:&nbsp " +
        `${country.population}` +
        "</p>" +
        "<p>Region:&nbsp " +
        `${country.region}` +
        "</p>" +
        "<p>subregion:&nbsp " +
        `${subReg}` +
        "</p>" +
        "<p>Capital:&nbsp " +
        `${capital}` +
        "</p>" +
        "</div>" +
        '<div class="inf">' +
        "<h1>&nbsp</h1>" +
        "<p>Top Level Domain: &nbsp" +
        `${country.tld}` +
        "</p>" +
        "<p>Currencies:&nbsp " +
        `${crr}` +
        "</p>" +
        "<p>Languages:&nbsp " +
        `${lag}` +
        "</p>" +
        "</div>" +
        '<div id="border">' +
        "<span id='noBtn'>Border countries:&nbsp</span>" +
        '<div id="btnBor">';
      if (country.borders) {
        for (let index = 0; index < country.borders.length; index++) {
          let name = findCountryNAme(country.borders[index]);
          expand += '<span class="selectBorder dark">' + `${name}` + "</span>";
        }
      } else {
        expand += '<span class="selectBorder dark"> No Borders</span>';
      }

      expand +=
        "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "</section>";
      main.innerHTML = expand;
      evtBackButton();
      bordersBtn();
      modeHelper();
      sectionNav.className = "marTop";
    }

    function findCountryNAme(cca3) {
      let count = -1;
      do {
        count++;
      } while (data[count].cca3 != cca3);
      return data[count].name.common;
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
          createExpandedCard(findCountry(btn.innerHTML));
          modeHelper();
        });
      });
    }

    //Adding event to search ==========================================

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

    function autocomplete(inp, arr) {
      var currentFocus;
      inp.addEventListener("input", function (e) {
        var a,
          b,
          i,
          val = this.value;
        closeAllLists();
        if (!val) {
          return false;
        }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.setAttribute("class", `${modeClass}`);

            b.innerHTML =
              "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function (e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();

              setTimeout(() => {
                createExpandedCard(
                  findCountry(this.getElementsByTagName("input")[0].value)
                );
              }, 300);
            });
            a.appendChild(b);
          }
        }
      });
      inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          //up
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
      });
      function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        x[currentFocus].classList.add("autocomplete-active");
      }
      function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }
      function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists(e.target);
      });
    }

    autocomplete(document.getElementById("myInput"), countries);
  });

  //============================================================================
});
