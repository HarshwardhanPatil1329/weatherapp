import React, { useState } from 'react';
const api ={
    key: "f6a2e6ce3d38913343b5a654f38b3f34",
    base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
    const [query ,setQuery]=useState('');
    const [weather ,setWeather]=useState({});

    const search = evt =>{
      if(evt.key === "Enter"){
        fetch(`${api.base}weather?q=${query}$units=metric&APPID=${api.key}`)
        .then(res =>res.json())
        .then( result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        }
        );
      }
    }
    

    // const dateBuilder = (d) => {
    //   let months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    //   let days=["sun","mon","tue","wed","thur","fri","sat"];

    //   let day=days[d.getDay()];
    //   let date=d.getDate();
    //   let month=months[d.getMonth()];
    //   let year= d.getFullYear();

    //   return `${day} ${date} ${month} ${year}` 
    // }
  return (
    <div className="app">
      <main>
        <div className="search-box"> 
          <input
               type="text"
               className="search-bar"
               placeholder="search..."
               onChange={e=> setQuery(e.target.value)}
               value={query}
               onKeyPress={search}
        
          />
        </div>

      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name} ,{weather.sys.country}</div>
           
        </div>
        <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
              
            </div>
      <div className="weather">{weather.weather[0].main}</div>
        </div>


          </div>

      ) :('')}


        
      </main>
      
    </div>
  );
}

export default App;
