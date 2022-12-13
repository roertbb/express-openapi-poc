import yupToOpenAPI from "@rudi23/yup-to-openapi";
import { oapi } from "../openapi";
import { todoInputSchema, todoSchema } from "./domain";

export const todoComponentJsonSchema = yupToOpenAPI(todoSchema);
oapi.component("todos", "Todo", todoComponentJsonSchema);
export const todoComponentRef = oapi.component("todos", "Todo");

export const todoInputJsonSchema = yupToOpenAPI(todoInputSchema);
oapi.component("todos", "TodoInput", todoInputJsonSchema);
export const todoInputComponentRef = oapi.component("todos", "TodoInput");
