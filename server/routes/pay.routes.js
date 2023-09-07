import { Router } from "express";
import { createSession } from "../paycontrol/pay.controllers.js";
import formData from "../form/form.js";

const FRONT_PORT = 3000,
  router = Router();

router.post("/create-checkout-session", createSession);
router.get("/success", (req, res) =>
  res.redirect(`http://localhost:${FRONT_PORT}/success`)
);
router.get("/cancel", (req, res) =>
  res.redirect(`http://localhost:${FRONT_PORT}/`)
);
// masita
router.post("/guardartoken", async(req, res)=>{
  const { token, user} = await req.body;
  res.cookie('token',token,{
    maxAge:5000,
    httpOnly: true,
    sameSite: 'lax'
  })
  res.json('todo piola maestro')
})
//* FORM
router.post("/form", async (req, res) => {
  const { name_form, mail_form, query_form } = req.body;

  formData(name_form, mail_form, query_form);
});

export default router;
