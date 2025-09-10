import fs from "node:fs";
import path from "node:path";
import { processImage } from "../utils/imageProcessor.js";
describe("processImage (unit)", () => {
    const name = "encenadaport";
    const w = 200;
    const h = 200;
    it("creates and caches a resized image for valid inputs", async () => {
        const out1 = await processImage(name, w, h);
        expect(fs.existsSync(out1)).toBeTrue();
        expect(path.basename(out1)).toBe(`${name}_${w}x${h}.jpg`);
        const out2 = await processImage(name, w, h);
        expect(out2).toBe(out1);
    });
    it("throws ENOIMG when the source image does not exist", async () => {
        await expectAsync(processImage("__not_exists__", 100, 100))
            .toBeRejectedWith(jasmine.objectContaining({ code: "ENOIMG" }));
    });
});
//# sourceMappingURL=utilsSpec.js.map