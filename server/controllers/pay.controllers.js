import Stripe from "stripe";
import { config } from "dotenv";
import { BACK_PATH, PRIV_KEY } from "../../src/utils/consts.js";

config();
const stripe = new Stripe(PRIV_KEY);

export async function createSession(req, res) {
  const { id, list, user } = req.body,
    Id = id[0]?.id,
    Id1 = id[1]?.id,
    Id2 = id[2]?.id;
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: list,
      mode: "payment",
      success_url: `${BACK_PATH}/buy/${user}/${Id}/${Id1}/${Id2}`,
      cancel_url: `${BACK_PATH}/cleanlist`,
    });
    return res.json({
      sessionUrl: session.url,
    });
  } catch (e) {
    return res.status(500).json({ error: "La compra no se pudo realizar" });
  }
}

//* Deivid - Key - "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"
//* Staff Lym - Test key - "sk_test_51NdfNbCPshfmc7ctMo1Y4L8E9Hkl6KMeF8KzjSqdPgRxHdQRfREoONTs37h7wvbrJk2jixgjSLvT7EbRRJctHKpO00wQnsY8yV"
