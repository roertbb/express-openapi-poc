import { Request, Response, Router } from "express";
import { oapi } from "../openapi";
import { TodoInput } from "./domain";
import { todoComponentRef, todoInputComponentRef } from "./openapi";
import { addTodo, getTodos } from "./service";

// define parameters
oapi.parameters("completed", {
  name: "completed",
  in: "query",
  description: "Filter todos by completion status",
  schema: {
    type: "boolean",
    required: false,
  },
});

export const todosRouter = Router();

todosRouter.get(
  "/",
  oapi.validPath({
    tags: ["Todo"],
    summary: "Get todos",
    description: "Endpoint to get all todos",
    parameters: [
      // reference parameters
      oapi.parameters("completed"),
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
  (req: Request<{}, {}, {}, { completed?: boolean }>, res: Response) => {
    const { completed } = req.query;

    const todos = getTodos();

    if (completed !== undefined) {
      return res.json(todos.filter((todo) => todo.completed === completed));
    }

    return res.json(todos);
  }
);

// define body
oapi.requestBodies("TodoInput", {
  description: "Todo input",
  required: true,
  content: {
    "application/json": {
      schema: todoInputComponentRef,
    },
  },
});

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
  (req: Request<{}, {}, TodoInput>, res: Response) => {
    const { title, completed } = req.body;

    const todo = addTodo({
      title,
      completed,
    });

    return res.status(201).json(todo);
  }
);
