import app from "./app.js";
import connectDb from "./db/index.js";
import dotenv from "dotenv";
import pingDB from "./cron/test.cron.js";

dotenv.config({
    path: "./.env"
});

connectDb()
    .then(() => {
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.log(`Something went wrong while starting the server: ${error}`)
    })

