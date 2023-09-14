import Stripe from "stripe";
import { config } from "dotenv";
config();

const PRIV_KEY ="sk_test_51NdfNbCPshfmc7ctMo1Y4L8E9Hkl6KMeF8KzjSqdPgRxHdQRfREoONTs37h7wvbrJk2jixgjSLvT7EbRRJctHKpO00wQnsY8yV",
stripe = new Stripe(PRIV_KEY);

export async function prueba1 (req, res){
  console.log(req.body)
  res.send('todo joya maestro')
}
                              
export async function createSession(req, res, next) {
  const {id, list} = req.body
  const Id = id[0].id
  try{
    const session = await stripe.checkout.sessions.create({
      line_items: list,
      mode: "payment",
      success_url: `http://localhost:3000/success/${Id}`,
      cancel_url: "http://localhost:3000",
   });
  return res.json({
    sessionUrl: session.url
  }); 
  }
  catch(e){
    return res.status(500).json({error:'No se realizo la compra'})
  }

  next()
}