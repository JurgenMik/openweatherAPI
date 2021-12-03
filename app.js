document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city){
         var key='9521375636ffb7a426265026b4ac913c';
         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp){
         return resp.json()
    })// convert data to json
          .then(function(data){
           console.log(data);
    })
          .catch(function(){
          // catch any errors
          });
}
function cityWeather(e){
    weatherDataFetch('Tallinn');
}