// const dataOpenWeatherAPI = JSON.stringify(
//    "https://api.openweathermap.org/data/2.5/weather?lat=-9.18&lon=-75.01&appid=b48939e3244de86ec9d45cadbbfe52aa",
// );

const coordenadas = () => {
   // let lat, lon;
   // // navigator.geolocation.getCurrentPosition((position) => {
   // // lat = position.coords.latitude;
   // // lon = position.coords.longitude;
   // console.log(navigator.geolocation.getCurrentPosition());
   // // });

   // console.log(lat, lon);

   window.addEventListener("load", () => {
      let lat, lon;
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((pos) => {
            lat = pos.coords.latitude;
            lon = pos.coords.longitude;
         });
      }
      console.log(lat, lon);
   });
};
// console.log(coordenadas);

export default coordenadas;
