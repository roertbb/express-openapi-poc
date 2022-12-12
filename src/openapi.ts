// @ts-expect-error -- add type definitions
import openapi from "@wesleytodd/openapi";

export const oapi = openapi({
  openapi: "3.0.0",
  info: {
    title: "Some App",
    description: "Generated docs from an Express api",
    version: "1.0.0",
  },
});
