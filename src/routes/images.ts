import { Router } from "express";
import type { Request, Response } from "express";
import { processImage } from "../utils/imageProcessor.js";
import path from "node:path";

type OutputFormat = "jpg" | "png" | "webp";

interface ImagesQuery {
  filename?: string;
  width?: string | number;
  height?: string | number;
  format?: OutputFormat;
}

const router = Router();

router.get(
  "/",
  async (
    req: Request<unknown, unknown, unknown, ImagesQuery>,
    res: Response
  ): Promise<void> => {
    const { filename, width, height } = req.query;
    const w: number = Number(width);
    const h: number = Number(height);

    if (!filename || Number.isNaN(w) || Number.isNaN(h)) {
      res
        .status(400)
        .json({ error: "filename,width,height are required and must be numbers" });
      return;
    }

    if (!Number.isInteger(w) || !Number.isInteger(h) || w <= 0 || h <= 0) {
      res
        .status(400)
        .json({ error: "width and height must be positive integers" });
      return;
    }

    try {
      const filePath: string = await processImage(String(filename), w, h);
      res.sendFile(path.resolve(filePath));
      return;
    } catch (e: unknown) {
      const err = e as NodeJS.ErrnoException;
      if (err?.code === "ENOIMG") {
        res.status(404).json({ error: "Source image not found" });
        return;
      }
      // Optional: log for debugging
      console.error(err);
      res.status(500).json({ error: "Image processing failed" });
    }
  }
);

export default router;
