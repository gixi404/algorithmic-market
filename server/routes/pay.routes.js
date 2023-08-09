import { Router } from "express";
const FRONT_PORT = process.env.PORT_FRONT;
import { createSession } from "../paycontrol/pay.controllers.js";
const router = Router()
router.post("/create-checkout-session",createSession,)
router.get("/success",(req, res)=> res.redirect(`http://localhost:${FRONT_PORT}/`))
router.get("/cancel",(req, res)=> res.redirect(`http://localhost:${FRONT_PORT}/`))
 
export default router