const url = 'https://jsonplaceholder.typicode.com/users/4'
axios
  .get(url)
  // .then(data => console.log(data.data));
  .then(( {data} ) => console.log(data)); // destructuring
