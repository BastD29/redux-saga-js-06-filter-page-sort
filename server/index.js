import express from "express";

import userRoutes from "./routes/userRoutes.js";

const app = express();

const port = 8080;

app.use(express.json());

app.use("/users", userRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
