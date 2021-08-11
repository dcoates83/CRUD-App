
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {

    console.log('error connecting to MongoDB:', error.message)
  })

//**  something to think about **phone as number
const productSchema = new mongoose.Schema({
  first_name: {
    type: String,
    minLength: 1,
    required: true
  },
  last_name: {
    type: String,
    minLength: 1,
    required: true
  },
  phone_number: {
    type: String,
    minlength: 1,
    required: true,
    unique: true
  },
  product_id: Number,
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Product', productSchema)