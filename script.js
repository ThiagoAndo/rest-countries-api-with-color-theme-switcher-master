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

  //Printing all cards with their respective country ==========================
  fetchData().then((data) => {
    myData = { ...data };

    data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));

    let content = "";
    let main = document.querySelector("#main");
    data.forEach((country) => {
      content +=
        " <article class='dark'>" +
        "<div style='background-image:" +
        "url(" +
        `${country.flags.png}` +
        ")'" +
        ">" +
        "</div>" +
        "<div>" +
        "<div>" +
        "<h3>" +
        `${country.name.common}` +
        "</h3>" +
        "<p>Population: " +
        `${country.population}` +
        "</p>" +
        "<p>Region: " +
        `${country.region}` +
        "</p>" +
        "<p>Capital: " +
        `${country.capital}` +
        "</p>" +
        "</div>" +
        "</div>" +
        "</article>";
    });

    (function () {
      "user strict";
      main.innerHTML = content;
    })();

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
    });

    //Addinng functionality to Button mode ===============================
    btnMode.onclick = () => {
      const cards = document.querySelectorAll("article");


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

      function classes(class1, class2) {
        nav.className = class1;
        body.className = class2;
        input.className = class1;
        inputSelect.className = class1;
        cards.forEach((card) => {
          card.className = class1;
        });
      }

      if (btnTxt.innerHTML === "Light Mode") {
        btnTxt.innerHTML = "Dark Mode";
        classes("light", "blight");
        addEvent("#fafafa", "underline black", "#ffffff ", "none");
        input.classList.add("your-class");
        svg.classList.remove("filt");
      } else {
        btnTxt.innerHTML = "Light Mode";
        classes("dark", "bDark");
        input.classList.remove("your-class");
        svg.className = "filt";
        addEvent("#202c37", "underline black", "#2b3945 ", "none");
      
      }
    };
  });

  //============================================================================

  setTimeout(() => {
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
  }, 500);
});

/*
//this code is to implement on the expand card to it get close to the nav (the margin is interfering)
let sectionNav = document.querySelector("#srch");
sectionNav.className = "marTop";
sectionNav.className = "marg";
 body.classList.add("stop-scrolling");
 body.classList.remove("stop-scrolling");
 */
