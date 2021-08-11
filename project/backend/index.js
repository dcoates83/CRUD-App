
require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Product = require('./models/product')
app.use(express.json())
app.use(express.static('build'))
app.use(cors())

morgan.token('data', (req) => {
  return JSON.stringify(req.body)
})
app.use(morgan('dev'))
app.use(morgan(':data :req[header] :res[header]'))

app.get('/api/products', (request, response) => {
  Product.find({}).then(product => {
    response.json(product)
  })
})

app.post('/api/products', (request, response) => {
  const body = request.body
  if (body.first_name === undefined) {
    return response.status(400)
  }
  if (body.last_name === undefined) {
    return response.status(400)
  }

  if (body.phone_number === undefined) {
    return response.status(400)
  }

  const product = new Product({
    first_name: body.first_name,
    last_name: body.last_name,
    phone_number: body.phone_number,
    product_id: body.product_id,
  })
  product
    .save()
    .then(savedNote => savedNote.toJSON())
    .then(savedAndFormattedProduct => {
      response.json(savedAndFormattedProduct)
    })
    .catch(response => {
      return response.status(400)
    })
})




// **Fetching a single resource

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.get('/api/products/:id', (request, response, next) => {
  Product.findById(request.params.id)
    .then(product => {
      if (product) {
        response.json(product)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
        .catch(error => next(error))
    })
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ 'error': 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ 'error': error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

