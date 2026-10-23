import express from 'express';

const app = express();

app.get("/api/health", (req ,res)=> {
    res.status(200).json({
        status: "ok",
        service: "boutique rest api"
    });
})

export default app;