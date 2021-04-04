function PersonForm({setNewName, setNewNumber, persons, newName, setPersons, newNumber}) {
    return (
      <form>
          <div>
            name: <input onChange={(e) => {
              e.preventDefault();
              setNewName(e.target.value)}}/>
          </div>
          <div>
            number: <input onChange={(e) => {
              e.preventDefault();
              setNewNumber(e.target.value)}}/>
          </div>
          <div>
            <button type="submit" onClick={(e) => {
              e.preventDefault();
              console.log(persons)
              const arr = persons.filter((person) => person.name === newName)
              
              if (arr.length > 0) {
                alert(`${newName} already added.`)
              } else {
                setPersons([...persons, {name: newName, number: newNumber}])
              }
            }}>add</button>
          </div>
        </form>
    )
}
  
export default PersonForm