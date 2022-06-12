import { ChangeEvent, FormEvent } from 'react';
import useFormState from '../hooks/useNewPersonForm';
import { Person } from '../models/person';

interface FormProps {
  onNewPerson: (newPerson: Person) => void;
}

export default function Form({ onNewPerson }: FormProps) {
  const [inputValues, dispatch] = useFormState();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (inputValues.nick && inputValues.age && inputValues.avatar) {
      onNewPerson(inputValues);
      onHandleClear();
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    dispatch({ type: 'CHANGE_VALUE', payload: { inputName: name, inputValue: value } });
  };

  const onHandleClear = () => dispatch({ type: 'CLEAR' });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nick" placeholder="Nick" value={inputValues.nick} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={inputValues.age} onChange={handleChange} />
        <input type="text" name="avatar" placeholder="Avatar" value={inputValues.avatar} onChange={handleChange} />
        <textarea
          name="description"
          placeholder="Description"
          value={inputValues.description}
          onChange={handleChange}
        />
        <button type="button" onClick={onHandleClear}>
          Clear form
        </button>
        <button type="submit">Add new person</button>
      </form>
    </div>
  );
}
