window.addEventListener("load", () => {
  const btnMode = document.querySelector("#btn");
  const buttonTxt = document.querySelector("#btn  p");
  const svg = document.querySelector("#btn div:first-of-type");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  const input = document.querySelector("#form > input");
  const inputSelect = document.querySelector("#formSelec > select");
  const placeholder = document.querySelector("#form > input::placeholder");
  const btnTxt = document.querySelector("#btn p");
  let myData = {};
  let sectionNav = document.querySelector("#srch");

  // sectionNav.className = "marTop";

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
    function makeCards() {
      data.forEach((country) => {
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
    }

    //Addinng functionality to Button mode ===============================
    addEvent("#202c37", "#2b3945 ", "underline black", "none");

    function addEvent(color1, color2, txtType1, txtType2) {
      btnMode.addEventListener("mouseover", function () {
        btnMode.style.backgroundColor = color1;
        buttonTxt.style.textDecoration = txtType1;
      });
      btnMode.addEventListener("mouseout", function () {
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
          classes("light", "blight");
        btnMode.style.backgroundColor = "#ffffff";
        addEvent("#fafafa", "#ffffff", "underline black", "none");
        input.classList.add("your-class");
        svg.classList.remove("filt");
      } else {
        btnTxt.innerHTML = "Light Mode";
        classes("dark", "bDark");
        input.classList.remove("your-class");
        svg.className = "filt";
        btnMode.style.backgroundColor = "#2b3945";
        addEvent("#202c37", "#2b3945", "underline black", "none");
      }
    }

    function classes(class1, class2) {
      const cards = document.querySelectorAll("article");
      nav.className = class1;
      body.className = class2;
      input.className = class1;
      inputSelect.className = class1;
      cards.forEach((card) => {
        card.className = class1;
      });
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
          console.log(cls2[1]);
          obj.classList.remove(cls2[1]);
          obj.classList.add(class1);
        }

        expMode.className = class1;
      } catch (err) {}
    }

    //Addinng effect on the cards when the mouse is over ===============================
    const cards = document.querySelectorAll("article");
    cards.forEach((card) => {
      card.addEventListener("mouseover", function () {
        if (btnTxt.innerHTML === "Light Mode") {
          card.style.boxShadow = "0px 0px 6px 0px white";
        } else {
          card.style.boxShadow = "0px 0px 6px 0px black";
        }
      });
      card.addEventListener("mouseout", function () {
        card.style.boxShadow = "0px 0px 0px 0px";
      });

      //Creating screen with a clicked country expanded =================================
      card.addEventListener("click", function () {
        sectionNav.className = "marTop";
        let thisCountry = findCountry(card.id);
        createExpandedCard(thisCountry);
        setInterval(() => {
          mode("expand");
        }, 300);
      });
    });

    function findCountry(country) {
      let count = -1;
      do {
        count++;
      } while (data[count].name.common != country);
      return data[count];
    }

    function createExpandedCard(country) {
      let expand = "";
      const currencie = Object.keys(country.currencies)[0];
      const lang = Object.keys(country.languages)[0];
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
        `${country.subregion}` +
        "</p>" +
        "<p>Capital:&nbsp " +
        `${country.capital}` +
        "</p>" +
        "</div>" +
        '<div class="inf">' +
        "<h1>&nbsp</h1>" +
        "<p>Top Level Domain: &nbsp" +
        `${country.tld}` +
        "</p>" +
        "<p>Currencies:&nbsp " +
        `${country.currencies[currencie].name}` +
        "</p>" +
        "<p>Languages:&nbsp " +
        `${country.languages[lang]}` +
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
      bckBtn.addEventListener("click", function () {
        console.log(bckBtn.innerHTML);
      });
    }
  });

  //============================================================================

  /*
      let count = -1;
      do {
        count++;
      } while (data[count].name.common != "Brazil");
      console.log(data[count]);
      console.log("name: " + data[count].name.common);
      console.log("Native Name: " + data[count].altSpellings[2]);
      console.log("population: " + data[count].population);
      console.log("region: " + data[count].region);
      console.log("subregion: " + data[count].subregion);
      console.log("capital: " + data[count].capital);
      console.log("topLevelDomain: " + data[count].topLevelDomain);
       const currencie = Object.keys(data[count].currencies)[0]
       console.log(data[count].currencies[currencie].name);
      const lang = Object.keys(data[count].languages)[0];
      console.log("languages: " + data[count].languages[lang]);
      console.log("borders: " + data[count].borders);
      console.log("flags: " + data[count].flags.png);
*/
});

/*
//this code is to implement on the expand card to it get close to the nav (the margin is interfering)
let sectionNav = document.querySelector("#srch");

sectionNav.className = "marg";
 body.classList.add("stop-scrolling");
 body.classList.remove("stop-scrolling");
 */
