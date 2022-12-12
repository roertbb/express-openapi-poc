import { Todo } from "./domain";

const todos: Todo[] = [];

export const getTodos = () => todos;

export const addTodo = (todo: Todo) => todos.push(todo);

export const getTodo = (id: string) => todos.find((t) => t.id === id);

export const updateTodo = (id: string, todo: Todo) => {
  const index = todos.findIndex((t) => t.id === id);
  todos[index] = todo;
};

export const deleteTodo = (id: string) => {
  const index = todos.findIndex((t) => t.id === id);
  todos.splice(index, 1);
};
