import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ token, onOrderCreated }) => {
  const [formData, setFormData] = useState({
    description: '',
    location: '',
    budget: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/orders', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      onOrderCreated();
    } catch (error) {
      console.error('Error creating order', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Errand</h2>
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} />
      <input type="number" name="budget" placeholder="Budget" onChange={handleChange} />
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;
