
export async function fetchData() {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const dataParse = await data.json();
  return dataParse;
}
