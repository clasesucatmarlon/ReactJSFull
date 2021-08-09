const url = 'https://jsonplaceholder.typicode.com/users/1';

const peticion = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const data = peticion().then(console.log);