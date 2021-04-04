import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  
  const [ filteredPersons, setFilteredPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(res => setPersons(res.data))
  }, [])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons}/>

      <h2>Add new</h2>
      <PersonForm 
        setNewName={setNewName} 
        setNewNumber={setNewNumber} 
        persons={persons} 
        newName={newName} 
        setPersons={setPersons} 
        newNumber={newNumber}/>

      <h2>Numbers</h2>
      <Persons 
        filteredPersons={filteredPersons} 
        persons={persons}/>
      
    </div>
  )
}

export default App