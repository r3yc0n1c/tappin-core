import { Elysia, t } from "elysia";
import machineController from "@/routes/machine/machine.controller";

const machineRoutes = new Elysia();

machineRoutes
	.post("/create", machineController.CreateMachine, {
		body: t.Object(
			{
				userId: t.String(),
				title: t.String(),
				cpu: t.Integer(),
				ram: t.Integer(),
				size: t.Integer(),
				time: t.Integer()
			},
			{
				description: "Expected userId, title, time, cpu, ram, and size",
			},
		),
		detail: {
			summary: "Create Machine",
			tags: ["machine"],
		},
	})
	// .get("/", authController.Login, {
	// 	body: t.Object(
	// 		{
	// 			email: t.String(),
	// 			password: t.String(),
	// 		},
	// 		{
	// 			description: "Expected email and password",
	// 		},
	// 	),
	// 	detail: {
	// 		summary: "Login",
	// 		tags: ["auth"],
	// 	},
	// });

export default machineRoutes;
