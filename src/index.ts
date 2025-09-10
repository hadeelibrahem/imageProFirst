import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import imagesRouter from "./routes/images.js";

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/images", imagesRouter);

app.get("/api/health", (req: Request, res: Response): void => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});


if (process.env.NODE_ENV !== "test") {
  app.listen(port, (): void => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

export default app;