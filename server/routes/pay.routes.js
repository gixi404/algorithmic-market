import { Router } from "express";
import { createCourse } from "../controllers/course.db.controllers.js";
import { createUser } from "../controllers/user.db.controller.js";
import { createSession } from "../controllers/pay.controllers.js";
import {
  createShoppingCart,
  deleteShoppingCart,
  confirmShopping,
  redirectShopping,
} from "../controllers/shopping.controller.js";
import formData from "../form/form.js";

const FRONT_PORT = 3000,
  router = Router();

router.post("/create-checkout-session", createSession);

router.post("/createcourse", createCourse);

router.post("/users", createUser);

router.post("/buylist", createShoppingCart);

router.post("/buy", redirectShopping);

router.post("/guardartoken", async (req, res) => {
  const { token, user } = await req.body;
});

router.get("/cleanlist", deleteShoppingCart);

router.get("/buy/:idcourse1/:idcourse2/:idcourse3", confirmShopping);

router.post("/form", async (req, res) => {
  const { name_form, mail_form, query_form } = req.body;
  formData(name_form, mail_form, query_form);
});

export default router;
