import React from 'react'

const NewProduct = ({ products}) => {
return (
  products.map(product => {
    return (
  <div className="products" key={product.product_id} id={product.product_id}>
  
  <p>First Name: {product.first_name} </p>
  <p>Last Name: {product.last_name}</p>
  <p>Phone: {product.phone_number}</p>
  
</div>)
}))
}
export default NewProduct