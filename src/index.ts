import express, { Request, Response } from "express";
import { oapi } from "./openapi";
import { todosRouter } from "./todos/router";

const app = express();

// add openapi middleware
app.use(oapi);
// host swagger ui
app.use("/swagger-docs", oapi.swaggerui);

app.get(
  "/",
  oapi.path({
    tags: ["Hello"],
    summary: "Get Hello",
    description: "Test Endpoint that returns the greeting object",
    responses: {
      200: {
        description: "Successful",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                hello: { type: "string" },
              },
            },
          },
        },
      },
    },
  }),
  (req: Request, res: Response) => {
    return res.json({ message: "Hello World" });
  }
);

app.use("/todo", todosRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
