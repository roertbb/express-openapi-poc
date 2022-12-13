import * as yup from "yup";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const todoSchema = yup.object({
  id: yup.string().required(),
  title: yup.string().required(),
  completed: yup.boolean().required(),
});

export type TodoInput = {
  title: string;
  completed?: boolean;
};

export const todoInputSchema = yup.object({
  title: yup.string().required(),
  completed: yup.boolean(),
});
