class WeatherFeedService {
    constructor(cityID, apiKey) {
        this.cityID = cityID;
        this.apiKey = apiKey;
    
    }

    makeRequest (method, url) {
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
              resolve(xhr.response);
            } else {
              reject({
                status: this.status,
                statusText: xhr.statusText
              });
            }
          };
          xhr.onerror = function () {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          };
          xhr.send();
        });
      }
      
      // Example:
      
      makeRequest('GET', 'http://example.com')
      .then(function (datums) {
        console.log(datums);
      })
      .catch(function (err) {
        console.error('Augh, there was an error!', err.statusText);
      });

    get forDay() {
        var response = this.createXmlHttpRequest('https://api.openweathermap.org/data/2.5/weather?id=6137270&appid=ec11e6f570c12b5be620e77acf0f194c')
        
        console.log(response)
        
    }

    /*
    <div class="div-block-3">
        <h1 class="heading-4">Saguenay QC, canada</h1>
        <div class="row-2 w-row">
          <div class="w-clearfix w-col w-col-6">
            <h1 class="heading-5">-3</h1>
            <h1 class="heading-6">°C</h1>
          </div>
          <div class="w-col w-col-6"><img src="images/cloud.svg" width="107" class="image"></div>
        </div>
        <h3 class="heading-7">Légèrement Nuageux</h3>
        <div class="div-block-6">
          <h3 class="weather-information-extra-details">Précipitation: 38%</h3>
          <h3 class="weather-information-extra-details">Humidité: 82%</h3>
          <h3 class="weather-information-extra-details">Vent: 24 km/h</h3>
        </div>
        <div class="div-block-5" style="z-index: 1000">
          <canvas id="day-chart"></canvas>
       </div>
      </div>

    */

    get forNextFiveDays() {

    }
}