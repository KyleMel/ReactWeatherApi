import React, {useState, userEffect, useEffect} from 'react';
import './App.css';
import {getWeatherData} from './component/Weather';

function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('Des_Moines');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try{
      const data = await getWeatherData(city);
      setWeatherData(data);
      console.log(data);
    }catch(error) {
      console.log(error.message); 
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="card">
        <h2 className="title">Weather App</h2>
        <div className="search-form">
          <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Enter your City"/>
          <button type="button" onClick={() => getData()}>Search</button>
        </div>
        {weatherdata !== null ? (
          <div className="main-container">
            <h4>{weatherdata.current.condition.text}</h4>
            <div className="temperature">
              <h3>Current Temp</h3>
              <h2>{weatherdata.current.temp_f}&deg;F</h2>
            </div>
          <div className="location">
            <h3>{weatherdata.location.name} || {weatherdata.location.region}</h3>
          </div>
          <div className="temperature-range">
            <h6> Min temp || Max Temp</h6>
            <h6>{weatherdata.forecast.forecastday[0].day.mintemp_f}&deg;F || {weatherdata.forecast.forecastday[0].day.maxtemp_f}&deg;F </h6>
          </div>
        </div>
        ) : null}
        
      </div>
    </div>
  );
}

export default App;

/* 
*/
