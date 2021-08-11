var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var tempC = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button = document.querySelector('.submit');

button.addEventListener('click', function (name) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=bd7e559d92f6642501ea46718f211496')
    .then(response => response.json())
    .then(data => {
      var tempCels = Math.round(data['main']['temp'] - 273) + '° ' + ' Celsius';
      //var tempFar = (5/9 * tempCels) - 32;
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];

      main.innerHTML = nameValue;
      desc.innerHTML = descValue;
      tempC.innerHTML = "Temp: " + tempCels;

      input.value = "";
    })

    .catch(err => alert("Incorrect city name"));
})