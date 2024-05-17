import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/reviews', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews', error);
      }
    };

    fetchOrders();
    fetchReviews();
  }, [token]);

  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            {order.description} - {order.location} - ${order.budget} - {order.status}
          </li>
        ))}
      </ul>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review._id}>
            {review.rating} stars - {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
