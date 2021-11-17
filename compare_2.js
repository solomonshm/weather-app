// event handler
const retrieveWeather = () => {
    // grab the user values for city and country
    let city = document.getElementById('txtCity').value
    let country = document.getElementById('txtCountry').value
    // make a call to the weather API service
    weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
    
    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
            weHaveData = true
            // we have something back from the API - lets see how it looks
            if (data.cod == '400') {
                // oh dear
                msg = 'Unexpected weather in bagging area, please try again'
                document.getElementById('where').innerHTML = msg
                //console.log(data)
            } else {
                // all good - lets enjoy the weather data
                let location = `${city}, ${country}`
                let desc = data.weather[0].description
                let temp = data.main.temp
                let wind = { speed: data.wind.speed, deg: data.wind.deg }
                let temp_feels = data.main.feels_like
                let tempMsg = `The temperature is  ${temp}&deg; and feels like ${temp_feels}&deg;`
                let windMsg = `The wind speed is ${wind.speed} from ${wind.deg}&deg;`

                document.getElementById('where').innerHTML = location
                document.getElementById('txtDesc').innerHTML = desc
                document.getElementById('txtTemp').innerHTML = tempMsg
                document.getElementById('txtWind').innerHTML = windMsg
                document.getElementById('wibble').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

                
                //make the HTML weather node visible
                document.getElementById('weatherOutput').setAttribute('class', 'visible')
            }
        }).catch((error) => { // this catches server errors such as timeout
            console.error('Error:', error);
        })
}
document.querySelector('#btnGo').addEventListener('click', retrieveWeather)


