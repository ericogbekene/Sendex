import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ token, onReviewCreated }) => {
  const [formData, setFormData] = useState({
    order_id: '',
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/reviews', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      onReviewCreated();
    } catch (error) {
      console.error('Error creating review', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-red '>Create New Review</h2>
      <input type="text" name="order_id" placeholder="Order ID" onChange={handleChange} />
      <textarea name="comment" placeholder="Comment" onChange={handleChange} />
      <input type="number" name="rating" placeholder="Rating" onChange={handleChange} />
      <button type="submit">Create Review</button>
    </form>
  );
};

export default ReviewForm;
