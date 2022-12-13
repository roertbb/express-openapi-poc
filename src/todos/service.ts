import { Todo, TodoInput } from "./domain";

const todos: Todo[] = [];

export const getTodos = () => todos;

export const addTodo = ({ title, completed = false }: TodoInput) => {
  const newTodo = {
    id: Math.random().toString(36).substr(2, 9),
    title,
    completed,
  };

  todos.push(newTodo);

  return newTodo;
};

export const getTodo = (id: string) => todos.find((t) => t.id === id);

export const updateTodo = (id: string, todo: Todo) => {
  const index = todos.findIndex((t) => t.id === id);
  todos[index] = todo;
};

export const deleteTodo = (id: string) => {
  const index = todos.findIndex((t) => t.id === id);
  todos.splice(index, 1);
};
