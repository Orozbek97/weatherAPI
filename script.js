 const row = document.querySelector('.row')
 const nameCity = document.querySelector('.name-city')

function searchCity(){
    const yourCity = nameCity.value
    fetch(`http://api.weatherapi.com/v1/current.json?key=ce58c370efdf4d12881193701233003&q=${yourCity}`)
        .then(response => response.json())
        .then(data => {
            Object.values(data).map(city => {
                row.innerHTML += ` 
                <div class="col-6">
                  <div class="info">
                     <h3>Country   : </h3> <h2> ${Object.values(city.country).join("")} </h2> </div>
                     <div class="line"></div>
                     <div class="info">
                     <h3>Region :</h3> <h2> ${city.region} </h2></div>
                     <div class="line"></div>
                  <div class="info">
                     <h3>City :</h3> <h2> ${city.name} </h2></div>
                     <div class="line"></div>
                  <div class="info">
                     <h3>Temperature :</h3> <h2> ${data.current.temp_c}</h2>°C</div>
                     <div class="line"></div>
                     <div class="info">
                     <h3>Wind speed :</h3> <h2> ${data.current.wind_kph}</h2> km/h</div>
                  <div class="line"></div>
                  <div class="info-time">
                     <h3>Current Time :</h3> <h2> ${city.localtime} </h2></div>
                </div>    
           `
            })
        })
} searchCity()