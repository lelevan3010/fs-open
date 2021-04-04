function CountryWeather({thisCountry, weatherData}) {
    return (
        <>
            <h2>Weather in {thisCountry.name}</h2>
          {
            weatherData.current 
            &&
            <>
            <div><b>temperature</b> {weatherData.current.temperature} Celcius</div>
            <img style={{width: 80}} alt="flag" src={weatherData.current.weather_icons[0]}/>
            <div><b>wind</b> {weatherData.current.win_speed} mph direction {weatherData.current.wind_dir}</div>
            </>
          }
        </>
    )
}

export default CountryWeather