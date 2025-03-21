import express from "express";
import { devRouter } from "./routes/dev.routes.js";
import { githubRouter } from "./routes/github.routes.js";

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); 

// Use the devRouter for the "/api/v1/trending/dev" route
app.use("/devdisplay/v1/trending/dev", devRouter);

// Use the githubRouter for the "/api/v1/trending/github" route
app.use("/devdisplay/v1/trending/github", githubRouter);

// Global error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).json({
        message: "Something went wrong!",
        error: err.message
    });
});

export default app;
