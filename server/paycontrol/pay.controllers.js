import Stripe from "stripe";
import { config } from "dotenv";
config();

const PRIV_KEY ="sk_test_51NdfNbCPshfmc7ctMo1Y4L8E9Hkl6KMeF8KzjSqdPgRxHdQRfREoONTs37h7wvbrJk2jixgjSLvT7EbRRJctHKpO00wQnsY8yV",
stripe = new Stripe(PRIV_KEY);

export async function createSession(req, res) {

  try{
    const session = await stripe.checkout.sessions.create({
      line_items: req.body,
      mode: "payment",
      success_url: `http://localhost:3000/success/0`,
      cancel_url: "http://localhost:3000",
  });

  return res.json(session.url); 
  }
  catch(e){
    return res.send('no se realizo un choto la compra')
    throw new Error('no se puede realizar esta compra, posibles datos invalidos')
  }
}
