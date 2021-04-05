import { useState } from 'react'
import personsService from '../services/persons'

import Notify from './Notify'

function PersonForm({setNewName, setNewNumber, persons, newName, setPersons, newNumber}) {

  const [ isNotifyOpen, setIsNotifyOpen ] = useState(false)
  const [ notifyMessage, setNotifyMessage ] = useState('')
  const [ notifyType, setNotifyType ] = useState('success')
    
    return (
      <form>
          <Notify 
            type={notifyType} 
            isOpen={isNotifyOpen} 
            setIsOpen={setIsNotifyOpen} 
            message={notifyMessage}/>
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
            <button onClick={(e) => {
              e.preventDefault();

              const filtered = persons.filter((person) => person.name === newName)
              console.log(`filtered`, filtered)
              if (filtered.length > 0) {
                const confirm = window.confirm(`${newName} already added, replace old number with new one?`)
                if (confirm === false)
                  return;
                personsService.updatePerson(filtered[0].id, {name: newName, number: newNumber})
                  .then(person => {
                    setNotifyMessage(`${person.name} was updated`)
                    setIsNotifyOpen(true)
                    setNotifyType('success')
                    setPersons(state => {
                      return state.map((el, i) => {
                        if (filtered[0].id === el.id) {
                          return person
                        } else {
                          return el
                        }
                      })
                    })
                  })
                  .catch(err => {
                    setNotifyMessage(`Information already removed in server`)
                    setIsNotifyOpen(true)
                    setNotifyType('danger')
                  })
              } else {
                personsService.createPerson({name: newName, number: newNumber})
                  .then(person => {
                    setNotifyMessage(`${person.name} was created`)
                    setIsNotifyOpen(true)
                    setNotifyType('success')
                    setPersons([...persons, person])
                  })
              }
            }}>add</button>
          </div>
        </form>
    )
}
  
export default PersonForm