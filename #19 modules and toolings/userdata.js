const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();

export {data};
