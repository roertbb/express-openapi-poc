import { Router } from "express";
import { oapi } from "../openapi";
import { todoComponentRef } from "./openapi";
import { getTodos } from "./service";

export const todosRouter = Router();

todosRouter.get(
  "/",
  oapi.path({
    tags: ["Todo"],
    summary: "Get todos",
    description: "Endpoint to get all todos",
    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: todoComponentRef,
          },
        },
      },
    },
  }),
  (req, res) => {
    return res.json(getTodos);
  }
);
