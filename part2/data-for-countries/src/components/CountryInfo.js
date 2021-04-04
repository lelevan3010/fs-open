function CountryInfo({thisCountry}) {
    return (
        <>
        <h2>{thisCountry.name}</h2>
          <p>capital: {thisCountry.capital}</p>
          <p>population: {thisCountry.population}</p>
          <h3>languages</h3>
          <ul>
            {
              thisCountry.languages.map((language) => {
                return <li key={language.name}>{language.name}</li>
              })
            }
          </ul>
          <img style={{width: 200}} alt="flag" src={thisCountry.flag}/>
        </>
    )
}

export default CountryInfo