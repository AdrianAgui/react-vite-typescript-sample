import './App.css';

import { useRef, useState } from 'react';
import Form from './components/Form';
import List from './components/List';

import useApiPeople from './hooks/useApiPeople';
import { Person } from './models/person';

export default function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const appRef = useRef<HTMLDivElement>(null);

  const handleNewPerson = (person: Person) => {
    setPeople((persons) => [...persons, person]);
  };

  useApiPeople(handleNewPerson);

  return (
    <div className="App" ref={appRef}>
      <h1>People</h1>
      <List people={people} />
      <Form onNewPerson={handleNewPerson} />
    </div>
  );
}
