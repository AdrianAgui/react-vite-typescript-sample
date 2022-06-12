import { ChangeEvent, FormEvent, useState } from "react";
import { Person } from "../types";

interface FormState {
  inputValues: Person;
}

interface FormProps {
  onNewPerson: (newPerson: Person) => void;
}

export default function Form({ onNewPerson }: FormProps) {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: "",
    age: 0,
    avatar: "",
    description: "",
  });

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewPerson(inputValues);
  };

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nick"
          placeholder="Nick"
          value={inputValues.nick}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={inputValues.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="avatar"
          placeholder="Avatar"
          value={inputValues.avatar}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={inputValues.description}
          onChange={handleChange}
        />
        <button type="submit">Add new person</button>
      </form>
    </div>
  );
}
