import { Router } from "express";
import { getSubscribers } from "../controllers/subscribers.controllers.js";

const router = Router();

router.get("/subscribers", getSubscribers)

export { router as subscribersRouter };