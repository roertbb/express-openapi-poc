import yupToOpenAPI from "@rudi23/yup-to-openapi";
import { oapi } from "../openapi";
import { todoInputSchema, todoSchema } from "./domain";

export const todoComponentOpenAPISchema = yupToOpenAPI(todoSchema);
oapi.component("todos", "Todo", todoComponentOpenAPISchema);
export const todoComponentRef = oapi.component("todos", "Todo");

export const todoInputOpenAPISchema = yupToOpenAPI(todoInputSchema);
oapi.component("todos", "TodoInput", todoInputOpenAPISchema);
export const todoInputComponentRef = oapi.component("todos", "TodoInput");
