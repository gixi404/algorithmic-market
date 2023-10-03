import Stripe from "stripe";
import { config } from "dotenv";
config();

const PRIV_KEY =
    "sk_test_51NdfNbCPshfmc7ctMo1Y4L8E9Hkl6KMeF8KzjSqdPgRxHdQRfREoONTs37h7wvbrJk2jixgjSLvT7EbRRJctHKpO00wQnsY8yV",
  stripe = new Stripe(PRIV_KEY);

export async function createSession(req, res) {
  const { id, list, User } = req.body;
  const Id = id[0]?.id;
  const Id1 = id[1]?.id;
  const Id2 = id[2]?.id;
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: list,
      mode: "payment",
      success_url: `http://localhost:3001/buy/${User}/${Id}/${Id1}/${Id2}`,
      cancel_url: "http://localhost:3001/cleanlist",
    });
    return res.json({
      sessionUrl: session.url,
    });
  } catch (e) {
    return res.status(500).json({ error: "No se realizo la compra" });
  }
}
