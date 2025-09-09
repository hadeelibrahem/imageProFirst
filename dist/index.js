import express from 'express';
import cors from 'cors';
import imagesRouter from './routes/images.js';
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use('/api/images', imagesRouter);
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
}
export default app;
//# sourceMappingURL=index.js.map