import personsService from '../services/persons'

function Persons({filteredPersons, setFilteredPersons, persons, setPersons}) {

  const handleDelete = (e, person) => {
    e.preventDefault();
    const confirm = window.confirm(`Are you sure to delete ${person.name}?`)
    if (confirm === false)
      return;

    personsService.deletePerson(person.id).then(() => {
      const remainPersons = persons.filter(thisPerson => thisPerson.id !== person.id)
      setPersons(remainPersons)
      
      if (filteredPersons.length > 0) {
        const remainFilteredPersons = filteredPersons.filter(thisPerson => thisPerson.id !== person.id)
        setFilteredPersons(remainFilteredPersons)
      }
    })
  }

  const renderPerson = (person) => {
    return (
      <div key={person.name}>
        <p style={{display: 'inline'}}>{person.name} {person.number}</p>
        <button onClick={(e) => handleDelete(e, person)}>delete</button>
      </div>
    )
  }
  
  return (
      <>
      {
        filteredPersons.length > 0 
        ? filteredPersons.map((filteredPerson) => renderPerson(filteredPerson))
        : persons.map((person) => renderPerson(person))
      }
      </>
    )
}

export default Persons