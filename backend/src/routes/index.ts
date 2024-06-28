import { Elysia } from "elysia";
import authRoutes from "@/routes/auth";

const routes = new Elysia();

routes
	.group("/auth", (routes) => routes.use(authRoutes))
	// .group("/user", (routes) => routes.get("/data", () => "asd"));

export default routes;