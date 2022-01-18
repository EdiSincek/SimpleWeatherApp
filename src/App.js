import React, { useState } from "react";
import { Map } from 'pigeon-maps';


function App() {

  const api = {
    key:"ff1136e05adb4b15a24152225210212",
    url:"http://api.weatherapi.com/v1/current.json"
  };
  
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("")
  const [err,setErr] = useState(null)
  
  const getData = () => {
    setErr(null)
    const url=api.url+"?key="+api.key+"&q="+city
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (response.error != null) {
          setErr(1)
          console.log("ERROR")
        }
        else {
          setWeather(response)
        }
        console.log(response);
      })
  }

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const map = () => {
    return (
      <Map height={300} defaultCenter={60,4} defaultZoom={11}></Map>
    )
  }



  return (
    <div>
      <input className="inText" type="text" onChange={handleChange} />
        <div className="btnDiv">
          <button className="searchBtn" onClick={getData}>SEARCH</button>
        </div>

      <div className="results">
          <h2 className="temp">{(weather === null || err === 1) ? null : weather.current.temp_c + "°C"}</h2>
          <h2 className="location">{(weather === null || err === 1) ? null : weather.location.name + ", " + weather.location.country} </h2>
          <h2 className="localTime">{(weather === null || err === 1) ? null : "Local time: " + weather.location.localtime} </h2>
      </div>

    </div>
  );
}

export default App;
