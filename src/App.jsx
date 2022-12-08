import "./App.css";
import ContentLayout from "./components/layout/ContentLayout";
//-> Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faSun,
   faWind,
   faCloud,
   faTemperatureHigh,
   faCirclePlay,
   faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./components/common/Card";
import imgCard from "./assets/img/imgCard.png";
import imgDefault from "./assets/img/bgDefault.png";
// import ReactAudioPlayer from "react-audio-player";
// APIs
// import dataOpenWeatherAPI from "./services/apis/openweather_GET";
import coordenadas from "./services/apis/openweather_GET";

function App() {
   const imgP = "";
   ("https://pixabay.com/get/g9912f5440145b1ff11ddd6ca1e22cd8cab1c207c87be75e35a6859adb8aa91e24cce55b06f3c2bf749ec6ec80c4c1d24c1043b044807c78923946af8fe42d1f7_1280.jpg");

   coordenadas();
   console.log(coordenadas());

   return (
      <div className="App">
         <ContentLayout>
            <div className="seccionOne">
               <div className="melody">
                  <div className="rep">
                     <FontAwesomeIcon className="iconMelody" icon={faCirclePlay} />
                     Reproductor musical
                  </div>
               </div>
               <div className="info">
                  <div className="contentInfo">
                     <div className="selectCountry">
                        <label for="">Seleccione pais</label>
                        <select name="selectPais" id="pais">
                           <option value="PE">PE</option>
                        </select>
                     </div>
                     {/* Primera seccion de datos */}
                     <div className="contentOne">
                        {/* Card Imagen */}
                        <Card pl wdt="65%" img={imgCard}>
                           <p className="headCard">Pais</p>
                           <h2 className="h2t">Perú</h2>
                           <div className="lon_lat">
                              <div className="lon">
                                 <p>Longitud</p>
                                 <span>-75.01</span>
                              </div>
                              <div className="lat">
                                 <p>Latitud</p>
                                 <span>-9.18</span>
                              </div>
                           </div>
                        </Card>
                        {/* Card Info */}
                        <div className="hum_pres">
                           <Card flex>
                              <div className="humPre">
                                 <p>Humedad</p>
                                 <span>55%</span>
                              </div>
                              <div className="humPre">
                                 <p>Preción Atmosferica</p>
                                 <span>1002</span>
                              </div>
                           </Card>
                           <Card flex>
                              <div className="tempG">
                                 <div className="datos">
                                    <FontAwesomeIcon icon={faTemperatureHigh} />
                                    <p>28.8</p>
                                 </div>
                                 <span>Temp. Minima</span>
                              </div>
                              <div className="tempG">
                                 <div className="datos">
                                    <FontAwesomeIcon icon={faTemperatureHigh} />
                                    <p>28.8</p>
                                 </div>
                                 <span>Temp. maxima</span>
                              </div>
                           </Card>
                        </div>
                     </div>
                     {/* Segunda seccion de datos */}
                     <div className="contentTwo">
                        <Card wdt="50%">
                           <h2>Viento</h2>
                           <div className="contD">
                              <div className="elemnt">
                                 <div className="dt">
                                    <span>0,8 m/s</span>
                                    <p>Velocidad</p>
                                 </div>
                                 <FontAwesomeIcon className="icons" icon={faWind} />
                              </div>
                              <div className="elemnt">
                                 <div className="dt">
                                    <span>0,8 m/s</span>
                                    <p>Velocidad</p>
                                 </div>
                                 <FontAwesomeIcon className="icons" icon={faWind} />
                              </div>
                              <div className="elemnt">
                                 <div className="dt">
                                    <span>0,8 m/s</span>
                                    <p>Velocidad</p>
                                 </div>
                                 <FontAwesomeIcon className="icons" icon={faWind} />
                              </div>
                           </div>
                        </Card>
                        <Card wdt="48%">
                           <h2>Sol</h2>
                           <div className="contD">
                              <div className="elemnt e2">
                                 <div className="dt">
                                    <span>6 am</span>
                                    <p>Salida</p>
                                 </div>
                                 <FontAwesomeIcon className="icons2" icon={faSun} />
                              </div>
                              <div className="elemnt e2">
                                 <div className="dt">
                                    <span>18 pm</span>
                                    <p>Puesta</p>
                                 </div>
                                 <FontAwesomeIcon className="icons2" icon={faSun} />
                              </div>
                           </div>
                        </Card>
                     </div>
                  </div>
               </div>
            </div>
            <div className="seccionTwo">
               <div className="dataSeccionTwo">
                  <div className="cardClima">
                     <div className="clima">
                        <p>Clima</p>
                        <h2>Nublado</h2>
                        <span>Pocas Nuves</span>
                     </div>
                     <div className="climaIcon">
                        <FontAwesomeIcon className="nubeIcn" icon={faCloud} />
                        <div className="climaDatoIcon">
                           <p>81%</p>
                           <p>Nubes</p>
                        </div>
                     </div>
                  </div>
                  <div className="cardDataCli">
                     <p>Temperatura</p>
                     <h2>28,8</h2>
                     <span>Grados Celsius</span>
                  </div>
               </div>
               <div className="creditos">
                  <p>Autor Audio: Pixabay</p>
                  <p>Autor: Hans</p>
                  <p>Ver Página</p>
                  <p>Descargar imagen</p>
               </div>
            </div>
            <footer>
               <p>Desarrollado y diseñado por: Rickert L. Gonzales R.</p>
            </footer>
         </ContentLayout>
         <div className="filtro"></div>
         <img src={imgP ? imgP : imgDefault} alt="fondo" />
      </div>
   );
}

export default App;
