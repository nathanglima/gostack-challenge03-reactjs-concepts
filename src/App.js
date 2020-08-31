import React, { useEffect, useState } from "react";
import api from './services/api';

import "./styles.css";

function App() {

  const [repositories, setRepository] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepository(response.data);
    });
}, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: 'ReactJS Concepts',
      url: 'https://github.com/nathanglima/reactjs-concepts',
      techs: ['NodeJS', 'ReactJS']
    });

    setRepository([...repositories, response.data]);
    
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);

    setRepository(repositories.filter(
      repository => repository.id != id
    ));

  }

  return (
    <div>
        <ul data-testid="repository-list" >
        {repositories.map(repository => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
        </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
