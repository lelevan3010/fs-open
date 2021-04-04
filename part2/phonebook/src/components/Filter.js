function Filter({ persons, setFilteredPersons }) {
    return (<span>filter shown with 
      <input onChange={
        (e) => {
          e.preventDefault()
          const arr = persons.filter((person) => person.name.toLowerCase().includes(e.target.value.toLowerCase()))
          setFilteredPersons(arr)
        }
     }/>
    </span>
    )
}

export default Filter