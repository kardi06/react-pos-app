import express from "express";
import "dotenv/config";
import process from "process";
import appMiddleware from "./middleware/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(appMiddleware);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});