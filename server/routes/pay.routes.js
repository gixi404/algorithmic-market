import { Router } from 'express'
import { createSession } from '../paycontrol/pay.controllers.js'
import formData from '../form/form.js'

const FRONT_PORT = 3000,
  router = Router()

router.post('/create-checkout-session', createSession)
router.get('/success', (req, res) =>
  res.redirect(`http://localhost:${FRONT_PORT}/success`)
)
router.get('/cancel', (req, res) =>
  res.redirect(`http://localhost:${FRONT_PORT}/`)
)

//* FORM
router.post('/form', (req, res) => {
  const { name_form, mail_form, query_form } = req.body
  formData(name_form, mail_form, query_form)
  res.redirect('http://localhost:3000/')
})

export default router
