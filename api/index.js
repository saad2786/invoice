const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
const mongodb = require('mongodb')
const morgan = require('morgan')
const helmet = require('helmet')
const route = require('./routes/Customer')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(morgan('common'))
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Database Connected')
})

app.use('/customers', route)

app.listen(8800, function () {
  console.log('Backend Server Running')
})
