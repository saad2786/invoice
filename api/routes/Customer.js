const router = require('express').Router()
const Customers = require('../models/customer')

router.get('/', async function (req, res) {
  try {
    const data = await Customers.find({})
    res.status(200).send(data)
  } catch (err) {
    res.status(400).send(err)
  }
})
router.post('/', async function (req, res) {
  console.log(req.body)
  const { CustomerName, email, items, subTotal } = req.body
  try {
    const newCustomer = await new Customers({
      CustomerName,
      email,
      items,
      subTotal,
    })
    const data = await newCustomer.save()
    res.status(200).send(data)
  } catch (err) {
    res.status(400).send(err)
  }
})
router.delete('/', async function (req, res) {
  const { id } = req.query
  try {
    const result = await Customers.deleteOne({ _id: id })
    res.status(200).send('Customer Deleted Successfully')
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router
