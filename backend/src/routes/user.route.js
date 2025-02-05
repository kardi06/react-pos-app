import { Router } from "express";
import { createUser, updateUser } from "../controllers/user.controller.js";
import { autenticate } from "../controllers/error.controller.js";

const userRouter = Router();

userRouter.post("/users", createUser);
userRouter.put("/users/:id", autenticate, updateUser);

export default userRouter;