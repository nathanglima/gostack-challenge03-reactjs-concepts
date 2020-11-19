<img alt="GoStack" src="https://camo.githubusercontent.com/a869a2aaab296ef925343d7e76518cd213eb0a30/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732d6e65772e706e67" />

<h2 align="center">
  Challenge 03: ReactJS concepts
</h2>


## :page_facing_up: About this challenge

The objective of this challenge is to apply the knowledge acquired in ReactJS, this case we develop the front-end of the repository project, following the first challenge, where we develop a back-end API.

We went to challenge the develop a following items: List repositories by title, create a new repository and delete a repository by id.

## :rocket: About of tests
Some rules for evaluating this challenge were proposed, some tests were written using jest and to pass the tests it is necessary to respect all the points below:

#### *should be able to add new repository*

In order for this test to pass, your application must allow that a repository be added in your back-end and listing in your front-end inside of a LI.

```js

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
```

```js
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
```

#### *should be able to remove repository*

In order for this test to pass, your application must allow that when clicking on the remove button, that will be inside LI of the repository added, the item must removed from the list.

```js
async function handleRemoveRepository(id) {
  await api.delete(`repositories/${id}`);

  setRepository(repositories.filter(
    repository => repository.id != id
  ));
}
```

```js
<button onClick={handleAddRepository}>Adicionar</button>
```
