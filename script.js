// weebsite: https://www.weatherapi.com/my/
// username: moteh60931@djpich.com
// password: moteh60931@djpich.com
/*-----------------------------------------------*/

output = document.getElementById("output");
searchCity = document.getElementById("searchCity");
getWeather = document.getElementById("getWeather");

url = "https://api.weatherapi.com/v1";
api = "b1d04b48ca6d4e0a92d113222230304";

const result = () => {
    cityName = searchCity.value;

    fetch(`${url}/current.json?key=${api}&q=${cityName}`)
        .then(response => response.json())
        .then(data => {
            icon = data.current.condition.icon;
            city = data.location.name;
            region = data.location.region;
            country = data.location.country;
            locatTime = data.location.localtime;
            temp_c = data.current.temp_c;
            temp_f = data.current.temp_f;
            weather = data.current.condition.text;

            output.innerHTML = `
            <div id="icon">
          <img src="${icon}" alt="" />
        </div>
        <div id="city">City : ${city}</div>
        <div id="region">Region : ${region}</div>
        <div id="country">Country : ${country}</div>
        <div id="locatTime">Current Time : ${locatTime}</div>
        <div id="temp_c">Temperature in Celsius : ${temp_c}</div>
        <div id="temp_f">Temp in Fahrenheit : ${temp_f}</div>
            `;

            if (weather === 'Mist') {
                document.body.style.backgroundColor = '#c7d0d9';
            }
            else if (weather === 'Cloudy') {
                document.body.style.backgroundColor = '#6e7d8f';
            }
            else if (weather === 'Rain') {
                document.body.style.backgroundColor = '#2c3e50';
            }
            else if (weather === 'Sunny') {
                document.body.style.backgroundColor = '#f1c40f';
            }
            else if (weather === 'Clear') {
                document.body.style.backgroundColor = '#3498db';
            }
            else if (weather === 'Partly cloudy') {
                document.body.style.backgroundColor = '#9dbbce';
            }
            else {
                document.body.style.backgroundColor = "#fff";
            }

        })

        .catch(error => {
            output.innerHTML = `Error: ${error.message}`;
        });

};

