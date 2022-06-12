import { useReducer } from 'react';
import { Person } from '../models/person';

const INITIAL_STATE: Person = {
  nick: '',
  age: 0,
  avatar: '',
  description: '',
};

interface FormState {
  inputValues: Person;
}

type FormReducerAction =
  | { type: 'CHANGE_VALUE'; payload: { inputName: string; inputValue: string } }
  | { type: 'CLEAR' };

const formReducer = (state: FormState['inputValues'], action: FormReducerAction) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case 'CLEAR':
      return INITIAL_STATE;
  }
};

const useFormState = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useFormState;
