function displayCityInfo() {
  let rioDate = document.querySelector("#rio-brazil .date");
  let rioTime = document.querySelector("#rio-brazil .time");
  let rioElement = moment().tz("America/Sao_Paulo");
  rioDate.innerHTML = rioElement.format("dddd, MMMM D, YYYY");
  rioTime.innerHTML = rioElement.format("HH:mm:ss");

  let beijingDate = document.querySelector("#beijing-china .date");
  let beijingTime = document.querySelector("#beijing-china .time");
  let beijingElement = moment().tz("Asia/Shanghai");
  beijingDate.innerHTML = beijingElement.format("dddd, MMMM D, YYYY");
  beijingTime.innerHTML = beijingElement.format("HH:mm:ss");
}
displayCityInfo();
setInterval(displayCityInfo, 1000);

function changeDisplay(event) {
  function intervalChange() {
    let timeZone = event.target.value;
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let time = moment().tz(timeZone);
    let citiesElement = document.querySelector("#by-default");
    citiesElement.innerHTML = `<div class="city">
          <h2>${cityName}</h2>
          <div class="date">${time.format("dddd, MMMM D, YYYY")}</div>
          <div class="time">${time.format("HH:mm:ss")}</div>
        </div>`;
  }
  intervalChange();
  setInterval(intervalChange, 1000);
}

let listOfCities = document.querySelector("#list-of-cities");
listOfCities.addEventListener("change", changeDisplay);
