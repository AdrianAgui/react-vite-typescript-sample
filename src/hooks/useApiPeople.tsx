import axios from 'axios';
import { useEffect } from 'react';
import { ApiResponse, PersonApiResponse } from '../models/api';
import { Person } from '../models/person';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8cff93e950msh57c0ce5e0034178p1cf7a4jsn0232adf653c7',
    'X-RapidAPI-Host': 'random-user.p.rapidapi.com',
  },
};

const mapApiPersonResponse = (apiPerson: PersonApiResponse): Person => {
  return {
    nick: apiPerson.name.first,
    age: apiPerson.dob.age,
    avatar: apiPerson.picture.thumbnail,
    description: `${apiPerson.gender} from ${apiPerson.location.city}`,
  };
};

const useApiPeople = (handleNewPerson: (person: Person) => void) => {
  useEffect(() => {
    const fetchPeople = () => {
      return axios.get<ApiResponse>('https://random-user.p.rapidapi.com/getuser', options).then((res) => res.data);
    };

    fetchPeople()
      .then((data: ApiResponse) => {
        const { results } = data;
        const apiPerson = results[0];
        const person = mapApiPersonResponse(apiPerson);
        handleNewPerson(person);
      })
      .catch((err) => console.error(err));
  }, []);
};

export default useApiPeople;
