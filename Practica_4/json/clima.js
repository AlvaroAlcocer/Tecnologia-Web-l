//ApiKey = f4cc4327bdab928a3f6c5f730bee3339
//IdCiudad = Santa Cruz : 2263540
//URL = api.openweathermap.org/data/2.5/weather?id=2263540&units=metric&appid=f4cc4327bdab928a3f6c5f730bee3339

const requestURL = "https://api.openweathermap.org/data/2.5/weather?id=2263540&units=metric&appid=f4cc4327bdab928a3f6c5f730bee3339";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function()
{
    const clima_json = request.response;
    console.log(clima_json);
    MostrarInformacion(clima_json);
}
    function MostrarInformacion(objJson)
    {
        var header1 = document.querySelector('header');
        var myh1 = document.createElement('h1');
        var tema = document.createElement('h2');
        var max = document.createElement('h2');
        var min = document.createElement('h2');
        var hum = document.createElement('h2');

        myh1.textContent = objJson.name;
        tema.textContent = 'Temperatura Actual :' +objJson.main.temp;
        max.textContent = 'Temperatura Maxima :' +objJson.main.temp_max;
        min.textContent = 'Temperatura Minima :' +objJson.main.temp_min;
        hum.textContent = 'Humedad relativa :' +objJson['main'].humidity +'%';
        header1.appendChild(myh1);
        header1.appendChild(tema);
        header1.appendChild(min);
        header1.appendChild(max);
        header1.appendChild(hum);

    }
