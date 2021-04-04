function Persons({filteredPersons, persons}) {
    return (
      <>
      {
        filteredPersons.length > 0 
        ? filteredPersons.map((filteredPerson) => <p key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</p>)
        : persons.map((person) => <p key={person.name}>{person.name} {person.number}</p>)
      }
      </>
    )
}

export default Persons