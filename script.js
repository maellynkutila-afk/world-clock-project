function displayCityInfo() {
  let rioDate = document.querySelector("#rio-brazil .date");
  let rioTime = document.querySelector("#rio-brazil .time");
  let rioElement = moment().tz("Amercia/Sao_Paulo");
  rioDate.innerHTML = rioElement.format("dddd, MMMM D, YYYY");
  rioTime.innerHTML = rioElement.format("HH:mm:ss");

  let beijingDate = document.querySelector("#beijing-china .date");
  let beijingTime = document.querySelector("#beijing-china .time");
  let beijingElement = moment().tz("Asia/Shanghai");
  beijingDate.innerHTML = beijingElement.format("dddd, MMMM D, YYYY");
  beijingTime.innerHTML = beijingElement.format("HH:mm:ss");
}
setInterval(displayCityInfo, 1000);
