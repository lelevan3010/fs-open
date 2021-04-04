import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CountriesList from './components/CountriesList'
import CountryInfo from './components/CountryInfo'
import CountryWeather from './components/CountryWeather'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])
  const [ weatherData, setWeatherData ] = useState({})

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(res => setCountries(res.data))
  }, [])
  
  useEffect(() => {
    if (filteredCountries.length === 1) {
      axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${filteredCountries[0].name}`)
        .then(res => setWeatherData(res.data))
    }
  }, [filteredCountries])
  
  const renderCountries = () => {
    if (filteredCountries.length > 10) {
      return (<p>Too many matches, specify another filter</p>)
    } else if (filteredCountries.length === 1) {
      const thisCountry = filteredCountries[0];

      return(
        <div>
          <CountryInfo thisCountry={thisCountry}/>
          <CountryWeather thisCountry={thisCountry} weatherData={weatherData}/>
        </div>
      )
    } else if (filteredCountries.length > 0) {
      return <CountriesList filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries} />
    } else {
      return <></>;
    }
  }

  const handleFilterCountries = (e) =>{
    const arr = countries.filter(country => {
      return country.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredCountries(arr)
  }

  return (
    <div>
      <span>find countries <input onChange={(e) => handleFilterCountries(e)}/></span>
      {renderCountries()}
    </div>
  )
}

export default App