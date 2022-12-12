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
