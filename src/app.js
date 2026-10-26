import express from 'express';
import productRouter from './routes/product.routes.js';
import errorHandler from './middlewares/error.middleware.js';

const app = express();
app.use(express.json());

app.get("/api/health", (req ,res)=> {
    res.status(200).json({
        status: "ok",
        service: "boutique rest api"
    });
})

app.use("/api/products", productRouter);

app.use(errorHandler);

export default app;