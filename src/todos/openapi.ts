import yupToOpenAPI from "@rudi23/yup-to-openapi";
import { oapi } from "../openapi";
import { todoSchema } from "./domain";

export const todoComponentJsonSchema = yupToOpenAPI(todoSchema);

// defines component
oapi.component("todos", "Todo", todoComponentJsonSchema);

// defines reference to component
export const todoComponentRef = oapi.component("todos", "Todo");
