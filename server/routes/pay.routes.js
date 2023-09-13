import { Router } from "express";
import { createCourse } from "../controllers/course.db.controllers.js";
import { createUser } from "../controllers/user.db.controller.js";
import { createSession, prueba1 } from "../controllers/pay.controllers.js";
import formData from "../form/form.js";

const FRONT_PORT = 3000,
  router = Router();

router.post("/create-checkout-session", createSession, prueba1);

router.get("/success", (req, res) =>
  res.redirect(`http://localhost:${FRONT_PORT}/success`)
);

router.get("/cancel", (req, res) =>
  res.redirect(`http://localhost:${FRONT_PORT}/`)
);

router.post('/createcourse',createCourse)

router.post('/users', createUser)

router.get('/buy',(req, res) => {
  res.redirect('http://localhost:3000/')
})

router.post("/guardartoken", async (req, res) => {
  const { token, user } = await req.body;

  res.cookie("token", token, {
    maxAge: 5000,
    httpOnly: true,
    sameSite: "lax",
  });
  res.json("todo piola maestro");
});

//* FORM
router.post("/form", async (req, res) => {
  const { name_form, mail_form, query_form } = req.body;

  formData(name_form, mail_form, query_form);
});

export default router;
