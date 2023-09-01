window.addEventListener("load", () => {
  async function fetchData() {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const dataParse = await data.json();
    return dataParse;
  }
  fetchData().then((data) => {
    let content = "";
    let main = document.querySelector("#main");
    data.forEach((country) => {
      content +=
        " <article>" +
        "<div style='background-image:" +
        "url(" +
        `${country.flags.png}` +
        ")'" +
        ">" +
        "</div>" +
        "<div>" +
        "<div>" +
        "<h3>Germany</h3>" +
        "<p>Population</p>" +
        "<p>region</p>" +
        "<p>capital</p>" +
        "</div>" +
        "</div>" +
        "</article>" 
    });
    main.innerHTML = content;

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
  });
});
