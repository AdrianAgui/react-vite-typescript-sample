import { Person } from '../models/person';

interface Props {
  people: Person[];
}

export default function List({ people }: Props) {
  const renderList = (): JSX.Element[] => {
    return people.map((person: Person) => (
      <li key={person.nick}>
        <img src={person.avatar} alt={person.nick} />
        <p style={{ fontWeight: 'bold' }}>
          {person.nick}&nbsp;
          <span style={{ fontSize: '14px' }}>({person.age})</span>
        </p>
        <p>{person.description}</p>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
}
