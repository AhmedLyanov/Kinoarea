import Fastify from "fastify";
import swaggerUI from "@fastify/swagger-ui";
import swagger from "@fastify/swagger";
import { connectDB } from "./utils/db";
import dotenv from "dotenv";

dotenv.config();

const app = Fastify({
  logger: true,
});

await connectDB();

app.get("/", async () => {
  return {
    success: true,
  };
});

await app.register(swagger, {
  swagger: {
    info: {
      title: "Movie API",
      description: "API documentation",
      version: "1.0.0",
    },
    host: "localhost:4000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
});

await app.register(swaggerUI, {
  routePrefix: "/docs",
});

try {
  await app.listen({
    host: "0.0.0.0",
    port: 4000,
  });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}