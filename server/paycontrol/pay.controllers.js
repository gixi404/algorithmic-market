import Stripe from 'stripe'
import { config } from 'dotenv'
config()
const PRIV_KEY = process.env.STRIPE_PRIV_KEY
const stripe = new Stripe(PRIV_KEY)
export const createSession = async(req, res)=> {
    const {price, description, name, id} = req.body
    const precio = price*100
    const session = await stripe.checkout.sessions.create({
        line_items:[
            {
                price_data:{
                    product_data:{
                        name: name ,
                        description: description,
                    },
                    unit_amount: precio ,
                    currency: "usd"
                },
                quantity: 1 
            }
        ],
        mode:"payment",
        success_url:"http://localhost:3001/success",
        cancel_url:"http://localhost:3001/cancel"
    })
    return res.json(session.url)
};