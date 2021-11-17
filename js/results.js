function getImageUrl(weather) {
// TODO

}



data = {"coord":{"lon":23.3242,"lat":42.6975},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":280.69,"feels_like":278.07,"temp_min":279.84,"temp_max":281.27,"pressure":1026,"humidity":75},"visibility":10000,"wind":{"speed":4.12,"deg":110},"clouds":{"all":90},"dt":1637077549,"sys":{"type":2,"id":2034562,"country":"BG","sunrise":1637039981,"sunset":1637075012},"timezone":7200,"id":727011,"name":"Sofia","cod":200}
document.getElementById('location').innerHTML = data.name
document.getElementById('temp').innerHTML = `${(Math.round((data.main.temp - 273) * 10) / 10)}`
document.getElementById('feelslike').innerHTML = `${(Math.round((data.main.feels_like - 273) * 10) / 10)}`
document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
