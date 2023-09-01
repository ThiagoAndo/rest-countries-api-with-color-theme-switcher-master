window.addEventListener("load", () => {
  const btnMode = document.querySelector("#btn");
  const buttonTxt = document.querySelector("#btn  p");
  const svg = document.querySelector("#btn div:first-of-type");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  const input = document.querySelector("#form > input");
  const inputSelect = document.querySelector("#formSelec > select");
  const placeholder = document.querySelector("#form > input::placeholder");
  let myData = {};
  let sectionNav = document.querySelector("#srch");
  sectionNav.className = "marTop";
 
  
  async function fetchData() {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const dataParse = await data.json();
    return dataParse;
  }

  fetchData().then((data) => {
    myData = { ...data };

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

  });

  // btnMode.onclick = () => {
  //   const cards = document.querySelectorAll("article");
  //   function over() {
  //     btnMode.style.backgroundColor = "hsl(0, 0%, 98%)";
  //     buttonTxt.style.textDecoration = "underline black";
  //   }
  //   function out() {
  //     btnMode.style.backgroundColor = "hsl(0, 0%, 100%)";
  //     buttonTxt.style.textDecoration = "none";
  //   }

  //   function overD() {
  //     btnMode.style.backgroundColor = " hsl(207, 26%, 17%)";
  //     buttonTxt.style.textDecoration = "underline white";
  //   }
  //   function outD() {
  //     btnMode.style.backgroundColor = "hsl(209, 23%, 22%)";
  //     buttonTxt.style.textDecoration = "none";
  //   }

  //   const btnTxt = document.querySelector("#btn p");
  //   if (btnTxt.innerHTML === "Light Mode") {
  //     btnTxt.innerHTML = "Dark Mode";
  //     nav.className = "light";
  //     body.className = "blight";
  //     input.className = "light";
  //     input.classList.add("your-class");
  //     inputSelect.className = "light";
  //     svg.classList.remove("filt");
  //     btnMode.classList.add("lightHover");
  //     cards.forEach((card) => {
  //       card.className = "light";
  //     });
  //     btnMode.removeEventListener("mouseover", overD);
  //     btnMode.removeEventListener("mouseout", outD);
  //     btnMode.addEventListener("mouseover", over);
  //     btnMode.addEventListener("mouseout", out);
  //   } else {
  //     btnTxt.innerHTML = "Light Mode";
  //     nav.className = "dark";
  //     body.className = "bDark";
  //     input.className = "dark";
  //     input.classList.remove("your-class");
  //     inputSelect.className = "dark";
  //     svg.className = "filt";
  //     cards.forEach((card) => {
  //       card.className = "dark";
  //     });
  //     btnMode.classList.remove("lightHover");
  //     btnMode.removeEventListener("mouseover", over);
  //     btnMode.removeEventListener("mouseout", out);
  //     btnMode.addEventListener("mouseover", overD);
  //     btnMode.addEventListener("mouseout", outD);
  //   }

  // };

  setTimeout(() => {
    //   let count = -1;
    //   do {
    //     count++;
    //   } while (data[count].name.common != "Brazil");
    //   console.log(data[count]);
    //   console.log("name: " + data[count].name.common);
    //   console.log("Native Name: " + data[count].altSpellings[2]);
    //   console.log("population: " + data[count].population);
    //   console.log("region: " + data[count].region);
    //   console.log("subregion: " + data[count].subregion);
    //   console.log("capital: " + data[count].capital);
    //   console.log("topLevelDomain: " + data[count].topLevelDomain);
    //    const currencie = Object.keys(data[count].currencies)[0]
    //    console.log(data[count].currencies[currencie].name);
    //   const lang = Object.keys(data[count].languages)[0];
    //   console.log("languages: " + data[count].languages[lang]);
    //   console.log("borders: " + data[count].borders);
    //   console.log("flags: " + data[count].flags.png);
  }, 50);
});

/*
//this code is to implement on the expand card to it get close to the nav (the margin is interfering)
let sectionNav = document.querySelector("#srch");
sectionNav.className = "marTop";
sectionNav.className = "marg";
 body.classList.add("stop-scrolling");
 body.classList.remove("stop-scrolling");
 */