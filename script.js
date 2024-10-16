const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const localTime = document.getElementById("local-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName){
    const responce = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=7e74a8e8ca4f4ade9e4145028241510&q=${cityName}&aqi=yes`
      );
      return await responce.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
//   console.log(result);

  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  localTime.innerText = `${result.location.localtime}`;
  cityTemp.innerText = result.current.temp_c + " °C";
});




// const button = document.getElementById("search-button");
// const input = document.getElementById("city-input");

// const cityNamee = document.getElementById('city-name');
// const cityTemp = document.getElementById('city-temp');
// const localTime = document.getElementById('local-time');

// async function getDataa(cityName) {
//   const promise = await fetch(
//     `http://api.weatherapi.com/v1/current.json?key=7e74a8e8ca4f4ade9e4145028241510&q=${cityName}&aqi=yes`
//   );
//   return await promise.json();
// }

// button.addEventListener("click", async() => {
//   // alert('clciked')
//   const value = input.value;
//   const result = await getDataa(value);
// //   console.log(result);
//   cityNamee.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
//   localTime.innerText = result.location.localtime;
//   cityTemp.innerText = result.current.temp_c + " °C";
// });
