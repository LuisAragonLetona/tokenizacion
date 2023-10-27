import React, { useState, useEffect } from 'react';
import '../css/clima.css';


import { format } from "date-fns-tz";


function ClimaApp() {
  const [ciudadActual, setCiudadActual] = useState("San Salvador");
  const [unidades, setUnidades] = useState("metric");
  const [climaData, setClimaData] = useState(null);
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    obtenerClima();
    // Actualizar la hora cada segundo
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [ciudadActual, unidades]);

  function obtenerClima() {
    const API_KEY = '64f60853740a1ee3ba20d0fb595c97d5';
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadActual}&appid=${API_KEY}&units=${unidades}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.sys) {
          setClimaData(data);
          // Obtén la condición meteorológica actual
          const condicionMeteorologica = data.weather[0].main;
          // Mapea la condición a una clase CSS para el fondo
          const claseFondo = condicionesMeteorologicas[condicionMeteorologica];
          // Aplica la clase de fondo al contenedor principal
          document.body.classList.add(claseFondo);
        } else {
          // Tratar el caso en el que no se obtiene un resultado válido
          console.error("No se pudo obtener datos de clima válidos.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos de clima:", error);
      });
  }
  

  function convertirMarcaTiempo(marcaTiempo, zonaHoraria) {
    const fecha = new Date(marcaTiempo * 1000);
    const fechaFormateada = format(fecha, "EEEE, d MMMM yyyy HH:mm", {
      timeZone: zonaHoraria,
    });
    return fechaFormateada;
  }

  return (
    <div className="coint-clima">
      <div className="weather__header">
         <form className="weather__search"  onSubmit={(e) => e.preventDefault()} >
         <i className="fas fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="busca una ciudad..."
            className="weather__searchform"
            onChange={(e) => setCiudadActual(e.target.value)}
          />
        </form>
        
        <div className="weather__units">
          <span className="weather_unit_celsius" onClick={() => setUnidades("metric")}>
            {String.fromCharCode(176)}C
          </span>
          <span className="weather_unit_fahrenheit" onClick={() => setUnidades("imperial")}>
            {String.fromCharCode(176)}F
          </span>
        </div>
      </div>
      <div className="weather__body">
        <div>
          <h1 className="weather__city">{climaData?.name}, {climaData?.sys?.country}</h1>
          <div className="weather__datetime">
            {convertirMarcaTiempo(climaData?.dt, climaData?.timezone)}
          </div>
          <div className="weather__forecast">
            <p>{climaData?.weather[0]?.main}</p>
          </div>
          <div className="weather__icon">
            <img src={`http://openweathermap.org/img/wn/${climaData?.weather[0]?.icon}@4x.png`} alt="Weather Icon" />
          </div>
          <p className="weather__temperature">
            {`${climaData?.main?.temp.toFixed()}${unidades === "imperial" ? "°F" : "°C"}`}
          </p>
          <div className="weather__minmax">
            <p>Min: {`${climaData?.main?.temp_min.toFixed()}°`}</p>
            <p>Max: {`${climaData?.main?.temp_max.toFixed()}°`}</p>
          </div>
        </div>
        <div id="hora">{hora.toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>
      </div>
      <div className="weather__info">
        <div className="weather__card">
          <i className="fas fa-temperature-full"></i>
          <div>
            <p>sensacion real</p>
            <p className="weather__realfeel">{`${climaData?.main?.feels_like.toFixed()}°`}</p>
          </div>
        </div>
        <div className="weather__card">
          <i className="fas fa-droplet"></i>
          <div>
            <p>Humedad</p>
            <p className="weather__humidity">{`${climaData?.main?.humidity}%`}</p>
          </div>
        </div>
        <div className="weather__card">
          <i className="fas fa-wind"></i>
          <div>
            <p>viento</p>
            <p className="weather__wind">{`${climaData?.wind?.speed} ${unidades === "imperial" ? "mph" : "m/s"}`}</p>
          </div>
        </div>
        <div className="weather__card">
          <i className="fas fa-gauge-high"></i>
          <div>
            <p>Presion</p>
            <p className="weather__pressure">{`${climaData?.main?.pressure} hPa`}</p>
          </div>
        </div>
      </div>
      <script src="https://kit.fontawesome.com/a692e1c39f.js" crossOrigin="anonymous"></script>
    </div>
  );
}

export default ClimaApp;
