import React, { useState } from "react";
import utils from "../services/service";
import axios from "axios";


const Form = ({products}) => {
  const [newName, setNewName] = useState("");
  const [newLastName, setLastName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleSubmit = (event ) => {
    event.preventDefault();
    const baseUrl = "/api/products";
    axios.get(`${baseUrl}`).then((response) => {
        const newObject = {
          first_name: newName,
          last_name: newLastName,
          phone_number: newPhone,
          product_id: products.length++,
        };
      console.log("here");
        utils.create(newObject);
        setNewName("");
        setLastName("");
        setNewPhone("");
        window.location.reload();
      
    });
    
  };

  
  return (<form className="products"onSubmit={handleSubmit}>
    
      <h3 className="title">Add new Items</h3>
       <div>
          <input value={newName } placeholder="First Name" onChange={(e) => {setNewName(e.target.value)} }/>
       </div>
       <div>
         <input value={newLastName } placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)} }/>
       </div>
       <div>
      <input className="lastInput" placeholder="Phone Number" value={newPhone }onChange={(e) => {setNewPhone(e.target.value)} }/>
       </div>
       <div>
      <button className="submit action-button" type="submit">Submit</button>
       </div>
     </form>)
}

export default Form