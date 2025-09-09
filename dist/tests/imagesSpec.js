import supertest from "supertest";
import app from "../index.js";
const requests = supertest(app);
describe("GET /api/images", () => {
    it("should return 400 if params are missing", async () => {
        const res = await requests.get("/api/images");
        expect(res.status).toBe(400);
    });
    it("should return 200 when valid params are provided", async () => {
        const res = await requests
            .get("/api/images")
            .query({ filename: "encenadaport", width: "200", height: "200" });
        expect(res.status).toBe(200);
    });
    it("returns 400 when width/height are not positive integers", async () => {
        const res = await requests
            .get("/api/images")
            .query({ filename: "palestine", width: "0", height: "-10" }); // strings
        expect(res.status).toBe(400);
        expect(res.body.error).toContain("positive integers");
    });
});
//# sourceMappingURL=imagesSpec.js.map