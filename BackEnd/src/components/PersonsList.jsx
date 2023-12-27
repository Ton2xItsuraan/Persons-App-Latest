import React, { useEffect, useState } from 'react';
import personService from '../service/personService';

function PersonsList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getPersons().then((response) => {
      setPersons(response);
    });
  }, []);

  return (
    <div>
      <ul>{persons.map((person) => (
        <li key={person.id}>{person.name} - {person.number}</li>
        
      ))}</ul>
    </div>
  )
}

export default PersonsList
