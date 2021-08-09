// REST - trabaja con JSON

const url = 'https://jsonplaceholder.typicode.com/users/1';

fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))