const url = 'https://jsonplaceholder.typicode.com/users/2';

const peticion = async () => {
  const {data} = await axios.get(url);
  return data.name;
}

const data = peticion().then(console.log);