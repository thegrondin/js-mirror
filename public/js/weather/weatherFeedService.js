class WeatherFeedService {
    constructor(cityID, apiKey) {
        this.cityID = cityID;
        this.apiKey = apiKey;
    
    }
      
    get forDay() {

       const req = new XMLHttpRequest();

       req.onreadystatechange = function(event) {
           // XMLHttpRequest.DONE === 4
           if (this.readyState === XMLHttpRequest.DONE) {
               if (this.status === 200) {
                   var jsonResponse  = JSON.parse(this.responseText);


                   var weatherCellHeaderElement = document.getElementById("weather-cell-header");

                   weatherCellHeaderElement.innerHTML = jsonResponse.name + " QC, Canada"

                  var weatherCellCellElement = document.getElementById("weather-cell-main-temp");

                   weatherCellCellElement.innerHTML = Math.round(jsonResponse.main.temp);

                   var weatherCellMainDescription = document.getElementById("weather-cell-main-description");

                   weatherCellMainDescription.innerHTML = jsonResponse.weather[0].description.replace(/\b\w/g, l => l.toUpperCase())

                   var weatherCellMainExtraDetails = document.getElementById("weather-information-extra-details-pressure");

                   weatherCellMainExtraDetails.innerHTML = "Pression: "  + jsonResponse.main.pressure;

                   var weatherCellMainExtraDetailsHumidity = document.getElementById("weather-information-extra-details-humidity");

                   weatherCellMainExtraDetailsHumidity.innerHTML = "Humidité : " + jsonResponse.main.humidity + "%"

               } else {
                   console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
               }
           }
       };
       
       req.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=6137270&appid=ec11e6f570c12b5be620e77acf0f194c&units=metric&lang=fr', true);
       req.send(null);
        
    }

    get forNextFiveDays() {


        const req = new XMLHttpRequest();

        req.onreadystatechange = function(event) {
            // XMLHttpRequest.DONE === 4
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    var jsonResponse  = JSON.parse(this.responseText);
 
                     console.log(jsonResponse)
 
                   var mainRowContainerElement = document.createElement('div');
                   mainRowContainerElement.className = "w-row";

                   var daysName = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];

                    for (var i = 0; i < 6; i++){
                        var weatherCellContainerElement = document.createElement('div')
                        weatherCellContainerElement.classList.add('column', 'w-col', 'w-col-2', 'w-col-medium-2', 'w-col-small-small-stack')

                        var weatherCellWrapperElement = document.createElement('div');

                        var weatherCellContentContainerElement = document.createElement('div');
                        weatherCellContentContainerElement.className = 'weather-day-in-week';

                        var weatherCellTitleContainerElement = document.createElement('div');

                        var weatherCellTitleElement = document.createElement('div');
                        weatherCellTitleElement.className = 'text-block-2';
                        weatherCellTitleElement.innerHTML = daysName[new Date(jsonResponse.list[i].dt_txt).getDay()] + ", " + new Date(jsonResponse.list[i].dt_txt).getHours() + "h00"

                        var weatherCellMainDescriptionElement = document.createElement('div');
                        weatherCellMainDescriptionElement.className = 'text-block';
                        weatherCellMainDescriptionElement.innerHTML = jsonResponse.list[i].weather[0].description

                        var weatherCellLogoElement = document.createElement('img');
                        weatherCellLogoElement.src = 'images/wind.svg'
                        weatherCellLogoElement.width = 75
                        weatherCellLogoElement.className = 'image-2';

                        var weatherCellTempContainerElement = document.createElement('div')
                        weatherCellTempContainerElement.classList.add('div-block-8', 'w-clearfix')

                        var weatherCellTempElement = document.createElement('h1');
                        weatherCellTempElement.className = "heading-9";
                        weatherCellTempElement.innerHTML = Math.round(jsonResponse.list[i].main.temp)

                        var weatherCellCelsiusElement = document.createElement('div');
                        weatherCellCelsiusElement.className = "text-block-3"
                        weatherCellCelsiusElement.innerHTML = '°C';

                        weatherCellTempContainerElement.appendChild(weatherCellTempElement);
                        weatherCellTempContainerElement.appendChild(weatherCellCelsiusElement);

                        weatherCellTitleContainerElement.appendChild(weatherCellTitleElement)

                        weatherCellContentContainerElement.appendChild(weatherCellTitleContainerElement)
                        weatherCellContentContainerElement.appendChild(weatherCellMainDescriptionElement)
                        weatherCellContentContainerElement.appendChild(weatherCellTempContainerElement)
                        
                        weatherCellWrapperElement.appendChild(weatherCellContentContainerElement);

                        weatherCellContainerElement.appendChild(weatherCellWrapperElement);

                        mainRowContainerElement.appendChild(weatherCellContainerElement);


                    }

                   
                    var weathercontainerElement = document.getElementById('weather-container-element')

                    weathercontainerElement.appendChild(mainRowContainerElement);



 
                } else {
                    console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
                }
            }
        };
        
        req.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=6137270&appid=ec11e6f570c12b5be620e77acf0f194c&units=metric&lang=fr', true);
        req.send(null);

    }

    /* 


     <!--<div class="w-row">
            <div class="column w-col w-col-2 w-col-medium-2 w-col-small-small-stack">
              <div>
                <div class="weather-day-in-week">
                  <div>
                    <div class="text-block-2">Vendredi<br>16 mars</div>
                  </div>
                  <div class="text-block">Nuageux avec quelques flocons</div><img src="images/wind.svg" width="75" class="image-2">
                  <div class="div-block-8 w-clearfix">
                    <h1 class="heading-9">-5</h1>
                    <div class="text-block-3">°C</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column-2 w-col w-col-2 w-col-medium-2 w-col-small-small-stack">
              <div class="weather-day-in-week">
                <div>
                  <div class="text-block-2">Samedi<br>17 mars</div>
                </div>
                <div class="text-block">Ciel variable</div><img src="images/cloudy.svg" width="75" class="image-2">
                <div class="div-block-8 w-clearfix">
                  <h1 class="heading-9">-2</h1>
                  <div class="text-block-3">°C</div>
                </div>
              </div>
            </div>
            <div class="column-3 w-col w-col-2 w-col-medium-2 w-col-small-small-stack">
              <div class="weather-day-in-week">
                <div>
                  <div class="text-block-2">Dimanche<br>18 mars</div>
                </div>
                <div class="text-block">Ciel variable</div><img src="images/cloudy.svg" width="75" class="image-2">
                <div class="div-block-8 w-clearfix">
                  <h1 class="heading-9">1</h1>
                  <div class="text-block-3">°C</div>
                </div>
              </div>
            </div>
            <div class="column-4 w-col w-col-2 w-col-medium-2 w-col-small-small-stack">
              <div class="weather-day-in-week">
                <div>
                  <div class="text-block-2">Lundi<br>19 mars</div>
                </div>
                <div class="text-block">Faibles averses de pluie</div><img src="images/raining.svg" width="75" class="image-2">
                <div class="div-block-8 w-clearfix">
                  <h1 class="heading-9">5</h1>
                  <div class="text-block-3">°C</div>
                </div>
              </div>
            </div>
            <div class="column-5 w-col w-col-2 w-col-medium-2 w-col-small-small-stack">
              <div class="weather-day-in-week">
                <div>
                  <div class="text-block-2">Mardi<br>20 mars</div>
                </div>
                <div class="text-block">légèrement nuageux</div><img src="images/cloud.svg" width="75" class="image-2">
                <div class="div-block-8 w-clearfix">
                  <h1 class="heading-9">-1</h1>
                  <div class="text-block-3">°C</div>
                </div>
              </div>
            </div>
            <div class="w-col w-col-2 w-col-medium-2 w-col-small-small-stack">
              <div class="weather-day-in-week">
                <div>
                  <div class="text-block-2">Mercredi<br>21 mars</div>
                </div>
                <div class="text-block">Ciel variable</div><img src="images/cloudy.svg" width="75" class="image-2">
                <div class="div-block-8 w-clearfix">
                  <h1 class="heading-9">-4</h1>
                  <div class="text-block-3">°C</div>
                </div>
              </div>
            </div>
          </div>-->

    */
}