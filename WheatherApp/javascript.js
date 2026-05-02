const apikey = "cd2898f279d2936921edc0d99498e4c3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; // openweathermap api

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");// when people will click on the search button it should send the city information to checkweather function

const weatherIcon = document.querySelector(".weather-icon");// to acess weather icon div

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){ // add response status
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
         var data = await response.json();

    // console.log(data);
// data ko update krne ke liye
    document.querySelector(".city").innerHTML = data.name; // 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";// data ke andr main me jakr temp ko acess kiya 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    // weather according image ko changes krne ke liye
    if(data.weather[0].main == "Clouds"){
         weatherIcon.src ="/WheatherApp/cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/WheatherApp/sun.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/WheatherApp/rain(2).png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/WheatherApp/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/WheatherApp/mist.png";
    }

    document.querySelector(".weather").style.display = "block"; // for disply in block
    document.querySelector(".error").style.display = "none";
   

    }
   
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value); // it will  the city name which return in the input field it will pass the city name in checkweather
})
