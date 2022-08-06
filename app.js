let getWeather = () => {

    axios.get('https://myweatherapp-online.herokuapp.com/weather')
    .then(function (response) {
       const data = response.data;
       console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    })
   




}