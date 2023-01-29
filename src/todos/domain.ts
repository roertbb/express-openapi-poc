import * as yup from "yup";

export const todoSchema = yup.object({
  id: yup.string().required(),
  title: yup.string().required(),
  completed: yup.boolean().required(),
});

// export type Todo = {
//   id: string;
//   title: string;
//   completed: boolean;
// };
export type Todo = yup.InferType<typeof todoSchema>;

export const todoInputSchema = yup.object({
  title: yup.string().required(),
  completed: yup.boolean(),
});

// export type TodoInput = {
//   title: string;
//   completed?: boolean;
// };
export type TodoInput = yup.InferType<typeof todoInputSchema>;
