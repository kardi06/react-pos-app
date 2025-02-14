import { Router } from "express";

import userRouter from "./user.route.js";
import categoryRoute from "./category.route.js";
import supplierRouter from "./supplier.route.js";
import productRouter from "./product.route.js";
import cartRouter from "./cart.route.js";

const router = Router();

router.use("/api", userRouter);
router.use("/api", categoryRoute);
router.use("/api", supplierRouter);
router.use("/api", productRouter);
router.use("/api", cartRouter);
router.use("*", (req, res) => res.status(404).json({ message: "not found" }));

export default router;