const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const https = require("https");

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  // Fetch a list of countries from the REST Countries API
  https.get("https://restcountries.com/v3.1/all", function (response) {
    let data = "";

    response.on("data", function (chunk) {
      data += chunk;
    });

    response.on("end", function () {
      const countries = JSON.parse(data);

      // Sort countries alphabetically by name
      countries.sort(function (a, b) {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });

      let options = "";
      for (let i = 0; i < countries.length; i++) {
        options += `<option value="${countries[i].name.common}">${countries[i].name.common}</option>`;
      }

      const html = `
        <body>
          <h1>Choose the Country And Enter the City Name</h1>
          <form action="/" method="POST">
            <select name="country">
            <option value="">-select-</option>
            ${options}
            </select><br />
            <input type="text" name="city" placeholder="Enter the City" /><br />
            <button type="submit">Get Weather</button>
          </form>
        </body>
      `;
      res.send(html);
    });
  });
});

app.post("/", function (req, res) {
  const city = req.body.city;
  const country = req.body.country;
  const apiKey = "";

  const GeoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apiKey}`;
  https
    .get(GeoUrl, function (response) {
      if (response.statusCode !== 200) {
        res.send(
          `<h1>Error: Could not find location '${city}, ${country}'</h1>`
        );
        return;
      }

      response.on("data", function (data) {
        const geoData = JSON.parse(data);
        if (geoData.length === 0) {
          res.send(
            `<h1>Error: Could not find location '${city}, ${country}'</h1>`
          );
          return;
        }

        const lat = geoData[0].lat;
        const lon = geoData[0].lon;

        const mapUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        https.get(mapUrl, function (response) {
          if (response.statusCode !== 200) {
            res.send(
              `<h1>Error: Could not fetch weather information for '${city}, ${country}'</h1>`
            );
            return;
          }

          response.on("data", function (data) {
            const weatherdata = JSON.parse(data);
            const temp = weatherdata.main.temp;
            const weatherDescription = weatherdata.weather[0].description;
            res.send(`<h1>The temperature in ${city} is ${temp} degrees Celsius</h1>
                    <p>The weather is currently ${weatherDescription}</p>`);
          });
        });
      });
    })
    .on("error", function (error) {
      // Handle any errors that occur during the API requests
      res.send(`<h1>Error: ${error.message}</h1>`);
    });
});

app.listen(4000, function () {
  console.log(
    " \n * Running on http://localhost:4000/ \n * Press CTRL+C to quit"
  );
});
