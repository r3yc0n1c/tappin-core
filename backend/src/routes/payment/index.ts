import { Elysia, t } from "elysia";
import paymentController from "@/routes/payment/payment.controller";

const paymentRoutes = new Elysia();

paymentRoutes
    .post("/generate", paymentController.GenerateURL, {
        body: t.Object(
            {
                destinationWallet: t.String(),
                cost: t.Number()
            },
            {
                description: "Expected Destination Wallet address.",
            },
        ),
        detail: {
            summary: "Generate Payment URL",
            tags: ["payment"],
        },
    })
    

export default paymentRoutes;
