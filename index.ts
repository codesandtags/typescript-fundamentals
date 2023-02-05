import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  console.log(`
  Todo ID = ${todo.id}
  The title is: ${todo.title} 
  Is finished?: ${todo.completed}
  `);
});
