/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

  return fetch(FULL_URL).then(response => response.json()).catch(err => console.log(err))
  // OOOORRRRR
  // const weatherPromise  = fetch(FULL_URL);

  // return weatherPromise.then((response) => {
  //   return response.json();
  // })
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  try {
    const data = await getWeatherData(city)
    console.log(data);
    showWeatherData(data)
    getCityImage(city)

  } catch (error) {
    console.log(error);
    console.log("Something happend");
  }
  // getWeatherData(city)
  // .then((res)=>{
  //   showWeatherData(res);
  // }).catch((error)=>{
  //   console.log(error);
  //   console.log("Something happend");
  // })
}

// /**
//  * Show the weather data in HTML
//  */
showWeatherData = (Data) => {

  document.getElementById("city-name").innerText = Data.name;
  document.getElementById("weather-type").innerText = Data.weather[0].main;
  document.getElementById("temp").innerText = Data.main.temp;
  document.getElementById("min-temp").innerText = Data.main.temp_min;
  document.getElementById("max-temp").innerText = Data.main.temp_max;
  document.getElementById("humidity").innerText = Data.main.humidity;
  document.getElementById("pressure").innerText = Data.main.pressure;
  document.getElementById("windspeed").innerText = Data.wind.speed;
  document.getElementById("country-name").innerText = Data.sys.country;
  document.getElementById("latitude").innerText = Data.coord.lat;
  document.getElementById("longitude").innerText = Data.coord.lon;
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87111da6c0mshc86cb1c79d033efp1ce45cjsn0ef8d03f9db7',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};
const getCityImage=(city)=>{
  fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${city}%20climate&pageNumber=1&pageSize=1&autoCorrect=true`, options)
	.then(response => response.json())
	.then(response => {
	  console.log(response)
    document.getElementById("city-img").src=response.value[0].url
  })
	.catch(err => {
	  console.log(err)
    document.getElementById('city-img').src="404-error-error-404-transparent-11563210406bsmsusbbzi.png"
  });
}
