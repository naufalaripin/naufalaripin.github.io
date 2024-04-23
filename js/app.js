const weatherApi =
  "http://api.weatherapi.com/v1/current.json?key=33056eac3e894e2f8d8122200242104&aqi=no";

const keyword = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");
const container = document.getElementById("container");
btnSearch.onclick = () => {
  fetch(`${weatherApi}&q=${keyword.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let element = "";
      element = showElement(data);
      container.innerHTML = element;
      // const current = data.current;
      // const location = data.location;
    });
};

function showElement(data) {
  return `
  <div class="container-data">
  <div class="box">
  <div class="location"><h2>${data.location.name}, ${data.location.region}, ${data.location.country}</h2></div>
  <div class="cuaca">
    <img src="https:${data.current.condition.icon}" alt="" />
    <h1>${data.current.temp_c}℃</h1>
  </div>
  <div class="data">
  <div class="tanggal"><p>${data.location.localtime}</p></div>
  <p>${data.current.condition.text}</div>
  </div></div></div>`;
}
