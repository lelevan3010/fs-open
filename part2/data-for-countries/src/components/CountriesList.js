function CountriesList({filteredCountries, setFilteredCountries}) {
    return filteredCountries.map((filteredCountry, index) => {
        return (
          <span key={filteredCountry.name}>
            <p>{filteredCountry.name}</p>
            <button onClick={(e)=>{
              e.preventDefault()
              setFilteredCountries([filteredCountry])
            }}>show</button>
          </span>
        )
    })
}

export default CountriesList
