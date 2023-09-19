import shopping from "../../src/DB/shopping.model.js";
import course from "../../src/DB/course.model.js";
import user from "../../src/DB/user.model.js";

//CRUD con mongoDB
export async function createShoppingCart (req, res) {
    try {
        const {id} = req.body;
        const shoppingData = id 
        if (!Array.isArray(shoppingData)) {
            return res.status(400).json({ error: 'Se esperaba un array de objetos en el cuerpo de la solicitud.' });
        }

        const shoppingRecords = await Promise.all(
            shoppingData.map(async (item) => {
                const { id, name } = item;

                const newShopping = new shopping({
                    id,
                    name
                });

                const shoppingSaved = await newShopping.save();
                return shoppingSaved;
            })
        );
        res.json(shoppingRecords[0]._id);
    } 
    catch (error) {
        res.status(500).json({ error: 'Se produjo un error.' });
    }
}

export async function getShoppingCart () {
    try
    {
    const allShopping = await shopping.find()
    return allShopping
    }
    catch(e)
    {
        throw new Error('no hay coincidencias')
    }
}

async function getShoppingId () {
    const list  = shopping.findById({})
}

export async function deleteShoppingCart (req,res) {
    try{
        const courseclean = await shopping.deleteMany({})
        if(courseclean.acknowledged){
            res.redirect('http://localhost:3000/')
        }
    }
    catch(e){
        throw new Error('no pudo borrar la lista')
    }
}

//validacion de compras con base de datos
export async function confirmShopping (req, res) {
    const {idcourse1, idcourse2, idcourse3} = req.params
    try {
        const data = await fetch('http://localhost:3001/buy', {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ coursecomprado:{
                1:idcourse1,
                2:idcourse2,
                3:idcourse3
            } }),
        });
        const json = await data.json();
        const ret = json.url
        res.redirect(ret)
    } 
    catch (error) {
        console.error('Error al realizar la solicitud POST:', error);
        res.status(500).json({ error: 'Error en la solicitud POST' });
    }
}

export  async function redirectShopping (req, res) {
    const {coursecomprado} = req.body
    console.log(coursecomprado)
    const coincidencia = await course.findOne({id:"2"})
    console.log(coincidencia)
    res.json(
        {
            url:'http://localhost:3000/',
        })
}