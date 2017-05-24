var axios = require("axios");  //required to make the api call, since we're not using jquery

const OPEN_WEATHER_URL = "http://api.openweathermap.org/data/2.5/find?units=imperial&appid=3ed0cd621db826abd51c3d2236e32583";
//needs &q=city &appid=key
//api key is 3ed0cd621db826abd51c3d2236e32583, but don't tell anyone!


module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_URL}&q=${encodedLocation}`
        
        return axios.get(requestURL).then(function(response){  //The first .then gets returned to the weather.jsx before any of this runs
            debugger;
            console.log(requestURL);
            if(response.data.message && response.data.cod !== "200"){  //extra error checking because this api is weird
                console.log("Error code: " + response.data.cod);
                
                throw new Error(response.data.message);  
            } else if (response.data.count === 0){
                throw new Error("City not found, sorry Charlie!");
            } else {
                return response.data.list[0].main.temp;  //this goes back to weather.jsx when .getTemp is called there, if all goes well.
            }
        }, function(response){
            throw new Error(response.data.message);  //this goes back to weather.jsx as an error message, I think.
        })
    }
};
