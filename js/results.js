function getImageUrl(weather) {

    if (weather == "Clouds") {
        return "https://www.publicdomainpictures.net/pictures/290000/velka/clouds-background-1553569797k5s.jpg"
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

function loadPage(data) {
    document.getElementById('location').innerHTML = data.name
    document.getElementById('temp').innerHTML = `${(Math.round((data.main.temp - 273) * 10) / 10)}`
    document.getElementById('feelslike').innerHTML = `${(Math.round((data.main.feels_like - 273) * 10) / 10)}`
    document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.body.style.backgroundImage = `url(${getImageUrl(data.weather[0].main)})`
}

document.addEventListener('DOMContentLoaded', function() {
    // functions that happen on load
    getParamsFromUrl();
}, false);



function getParamsFromUrl () {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    var city = urlParams.get('city');
    var country = urlParams.get('country');

    getData(city, country);
}


function getData(city, country) {
    var weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`

    $.ajax({
    url: weatherUrl,
    crossDomain: true,
    type:"GET",
    success: function (res){
    loadPage(res);
    }
})

}