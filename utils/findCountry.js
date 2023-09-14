
export let findCountry = (country, myData) => {
  let count = -1;
  do {
    count++;
  } while (myData[count].name.common != country);
  return myData[count];
}
