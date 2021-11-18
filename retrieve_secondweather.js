function getImageUrl(weather) {

    if (weather == "Clouds") {
        return "https://www.rmweb.co.uk/community/uploads/monthly_03_2015/post-3717-0-28910200-1427235972.jpg"
    } else if (weather == "Thunderstorm") {
        return "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    } else if (weather == "Drizzle") {
        return "https://images.unsplash.com/photo-1541919329513-35f7af297129?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpenpsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    } else if (weather == "Rain") {
        return "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    } else if (weather == "Snow") {
        return "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    } else if (weather == "Atmosphere") {
        return "https://wallpaper.dog/large/20394727.jpg"
    } else if (weather == "Clear") {
        return "https://wallpaperaccess.com/full/3364029.jpg"
    }

}


// event handler
const retrieveWeather2 = () => {
    // grab the user values for city and country
    let city = document.getElementById('txtCity2').value
    let country = document.getElementById('txtCountry2').value
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
                document.getElementById('location').innerHTML = msg
                console.log(data)
            } else {
                // all good - lets enjoy the weather data
                let location = `${city}, ${country}`
                let desc = data.weather[0].description
                let temp = data.main.temp
                let wind = { speed: data.wind.speed, deg: data.wind.deg }
                let temp_feels = data.main.feels_like
                let tempMsg = `The temperature is  ${temp}&deg; and feels like ${temp_feels}&deg;`
                let windMsg = `The wind speed is ${wind.speed} from ${wind.deg}&deg;`

                document.getElementById('where2').innerHTML = location
                document.getElementById('txtDesc2').innerHTML = desc
                document.getElementById('txtTemp2').innerHTML = tempMsg
                document.getElementById('txtWind2').innerHTML = windMsg
                document.getElementById('icon2').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                document.body.style.backgroundImage = `url(${getImageUrl(data.weather[0].main)})`
                document.body.style.backgroundPosition = "top right";

                
                //make the HTML weather node visible
                document.getElementById('weatherOutput2').setAttribute('class', 'visible')
            }
        }).catch((error) => { // this catches server errors such as timeout
            console.error('Error:', error);
        })
}
document.querySelector('#btnGo').addEventListener('click', retrieveWeather2)


