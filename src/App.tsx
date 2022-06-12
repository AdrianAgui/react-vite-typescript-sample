import "./App.css";

import { useEffect, useRef, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

import { Person } from "./types";

const INITIAL_STATE: Person[] = [
  {
    nick: "Adri",
    age: 25,
    avatar: "https://i.pravatar.cc/150?u=adri",
    description: "Senior Frontend Engineer",
  },
  {
    nick: "Juanita",
    age: 30,
    avatar: "https://i.pravatar.cc/150?u=juanito",
  },
];

export default function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const appRef = useRef<HTMLDivElement>(null);

  const handleNewPerson = (person: Person) => {
    setPeople((persons) => [...persons, person]);
  };

  useEffect(() => setPeople(INITIAL_STATE), []);

  return (
    <div className="App" ref={appRef}>
      <h1>People</h1>
      <List people={people} />
      <Form onNewPerson={handleNewPerson} />
    </div>
  );
}
