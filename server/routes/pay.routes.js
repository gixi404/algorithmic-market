import { Router } from "express";
import { createCourse } from "../controllers/course.db.controllers.js";
import { createUser } from "../controllers/user.db.controller.js";
import { createSession } from "../controllers/pay.controllers.js";
import { getCoursesBought } from "../controllers/shopping.controller.js";
import {
  deleteShoppingCart,
  confirmShopping,
  redirectShopping,
  getCoursesDB
} from "../controllers/shopping.controller.js";
import formData from "../form/form.js";

const router = Router();

router.post("/create-checkout-session", createSession);

router.post("/users", createUser);

router.get("/buy/:user/:idcourse1/:idcourse2/:idcourse3", confirmShopping);

router.post("/buy", redirectShopping);

router.post("/getcourses", getCoursesBought)

router.post("/getcoursesdb",getCoursesDB)

router.post("/guardartoken", async (req, res) => {
  const { token, user } = await req.body;
});

router.get("/cleanlist", deleteShoppingCart);

router.post("/form", async (req, res) => {
  const { name_form, mail_form, query_form } = req.body;
  formData(name_form, mail_form, query_form);
});

router.post("/createcourse", createCourse);

export default router;
