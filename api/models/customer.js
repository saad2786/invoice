const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
  {
    CustomerName: String,
    email: String,
    items: [
      { itemName: String, itemQty: Number, price: Number, total: Number },
    ],
    subTotal: Number,
  },
  { timestamps: true },
)

module.exports = mongoose.model('Customer', customerSchema)
