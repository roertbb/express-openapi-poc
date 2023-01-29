import { Request, Response, Router } from "express";
import { oapi } from "../openapi";
import { validationFormatterMiddleware } from "../validation-formatter-middleware";
import { TodoInput } from "./domain";
import { todoComponentRef, todoInputComponentRef } from "./openapi";
import { addTodo, getTodos } from "./service";

export const todosRouter = Router();

todosRouter.get(
  "/",
  oapi.validPath({
    tags: ["Todo"],
    summary: "Get todos",
    description: "Endpoint to get all todos",
    parameters: [
      {
        name: "completed",
        in: "query",
        description: "Filter todos by completion status",
        schema: {
          type: "boolean",
        },
        required: true,
      },
    ],
    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: todoComponentRef,
            },
          },
        },
      },
    },
  }),
  validationFormatterMiddleware,
  (req: Request<{}, {}, {}, { completed: string }>, res: Response) => {
    const completed = req.query.completed === "true" ? true : false;

    const todos = getTodos();

    if (completed !== undefined) {
      return res.json(todos.filter((todo) => todo.completed === completed));
    }

    return res.json(todos);
  }
);

todosRouter.post(
  "/",
  oapi.validPath({
    tags: ["Todo"],
    summary: "Create todo",
    description: "Endpoint to create new todo",
    requestBody: {
      description: "Todo input",
      required: true,
      content: {
        "application/json": {
          schema: todoInputComponentRef,
        },
      },
    },
    responses: {
      201: {
        description: "Success",
        content: {
          "application/json": {
            schema: todoComponentRef,
          },
        },
      },
    },
  }),
  validationFormatterMiddleware,
  (req: Request<{}, {}, TodoInput>, res: Response) => {
    const { title, completed } = req.body;

    const todo = addTodo({
      title,
      completed,
    });

    return res.status(201).json(todo);
  }
);
