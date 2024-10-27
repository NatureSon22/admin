import { Router } from "express";
import { fetchBots } from "../controllers/botController.js";

const botRoutes = Router();

botRoutes.get("/", fetchBots);

export default botRoutes;
