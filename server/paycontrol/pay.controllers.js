import Stripe from 'stripe'
import { config } from 'dotenv'
config()
const PRIV_KEY = "sk_test_51NdfNbCPshfmc7ctMo1Y4L8E9Hkl6KMeF8KzjSqdPgRxHdQRfREoONTs37h7wvbrJk2jixgjSLvT7EbRRJctHKpO00wQnsY8yV"
const stripe = new Stripe(PRIV_KEY)
export const createSession = async(req, res)=> {

    const {price, description, name, id} = req.body

    const precio = price * 100
    const session = await stripe.checkout.sessions.create({
        line_items:[
            {
                price_data:{
                    product_data:{
                        name: name ,
                        description: description
                    },
                    unit_amount: precio ,
                    currency: "usd"
                },
                quantity: 1 
            }
        ],
        mode:"payment",
        success_url:`http://localhost:3000/success/${id}`,
        cancel_url:"http://localhost:3001"
    })
    return res.json(session.url)
};