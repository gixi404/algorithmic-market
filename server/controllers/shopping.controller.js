import shopping from "../../src/DB/shopping.model.js";
import course from "../../src/DB/course.model.js";
import User from "../../src/DB/user.model.js";
import { FRONT_PATH, BACK_PATH } from "../../src/utils/consts.js";

//* CRUD con mongoDB.
export async function createShoppingCart(req, res) {
  try {
    const { id } = req.body,
      shoppingData = id;

    if (!Array.isArray(shoppingData)) {
      return res.status(400).json({
        error: "Se esperaba un array de objetos en el cuerpo de la solicitud.",
      });
    }

    const shoppingRecords = await Promise.all(
      shoppingData.map(async item => {
        const { id, name } = item,
          newShopping = new shopping({ id, name }),
          shoppingSaved = await newShopping.save();

        return shoppingSaved;
      })
    );
    res.json(shoppingRecords[0]._id);
  } catch (error) {
    res.status(500).json({ error: "Se produjo un error." });
  }
}

export async function getShoppingCart() {
  try {
    const allShopping = await shopping.find();
    return allShopping;
  } catch (e) {
    throw new Error("no hay coincidencias");
  }
}

export async function deleteShoppingCart(req, res) {
  try {
    const courseclean = await shopping.deleteMany({});
    if (courseclean.acknowledged) {
      res.redirect(`${FRONT_PATH}/`);
    }
  } catch (e) {
    throw new Error("no pudo borrar la lista");
  }
}

//validacion de compras con base de datos
// usuario
export async function confirmShopping(req, res) {
  const { user, idcourse1, idcourse2, idcourse3 } = req.params;

  try {
    await fetch(`${BACK_PATH}/buy`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        infoCompra: {
          user: user,
          c1: idcourse1,
          c2: idcourse2,
          c3: idcourse3,
        },
      }),
    });

    res.redirect(`${FRONT_PATH}/#/coursepurchased`);
  } catch (error) {
    console.error("Error al realizar la solicitud POST:", error);
    res.status(500).json({ error: "Error en la solicitud POST" });
  }
}

export async function redirectShopping(req, res) {
  const { infoCompra } = req.body,
    c1 = infoCompra.c1,
    c2 = infoCompra.c2,
    c3 = infoCompra.c3,
    user = infoCompra.user,
    coincidencia = await User.find({ email: user }),
    coursesUser = coincidencia[0].courses,
    arrayDeCompras = [...coursesUser];

  try {
    const c1bought = await course.find({ id: c1 });
    if (c1bought.length > 0) {
      c1bought[0].isBought = true;
      arrayDeCompras.push(c1bought[0]);
    }
    const c2bought = await course.find({ id: c2 });
    if (c2bought.length > 0) {
      c2bought[0].isBought = true;
      arrayDeCompras.push(c2bought[0]);
    }
    const c3bought = await course.find({ id: c3 });
    if (c3bought.length > 0) {
      c3bought[0].isBought = true;
      arrayDeCompras.push(c3bought[0]);
    }
    if (c1bought || c2bought || (c3bought && coincidencia)) {
      const usuarioAct = await User.updateOne(
        { email: user },
        { $set: { courses: arrayDeCompras } }
      );
    }
  } catch (e) {
    throw new Error("Algo falló al comprar los cursos");
  }
  res.json({
    url: `${FRONT_PATH}/`,
  });
}

export async function getCoursesBought(req, res) {
  const { usuario } = req.body;
  try {
    const findCourses = await User.find({ email: usuario });
    if (findCourses) {
      const recentylCourses = findCourses[0].courses;
      return res.json(recentylCourses);
    }
  } catch (e) {
    return res.json({ message: " no hay cursos" });
  }
}

// cursos
export async function getCoursesDB(req, res) {
  const courses = await course.find({});
  res.json(courses);
}
