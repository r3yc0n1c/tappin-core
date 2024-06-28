import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { prisma } from "@/libs/db";
import { log } from "@/libs/logger";
import cors from "@elysiajs/cors";

const PORT = process.env.PORT || 5000;

const app = new Elysia()
	.use(cors())
	.use(swagger())
	.use(log)
	.decorate("db", prisma);

app.get("/", () => "Hello from Elysia");

app.listen(PORT, () => {
	console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
});
