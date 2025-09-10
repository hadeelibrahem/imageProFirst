import { Router } from "express";
import { processImage } from "../utils/imageProcessor.js";
import path from "node:path";
const router = Router();
router.get("/", async (req, res) => {
    const { filename, width, height } = req.query;
    const w = Number(width);
    const h = Number(height);
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
        const filePath = await processImage(String(filename), w, h);
        res.sendFile(path.resolve(filePath));
        return;
    }
    catch (e) {
        const err = e;
        if (err?.code === "ENOIMG") {
            res.status(404).json({ error: "Source image not found" });
            return;
        }
        // Optional: log for debugging
        console.error(err);
        res.status(500).json({ error: "Image processing failed" });
    }
});
export default router;
//# sourceMappingURL=images.js.map