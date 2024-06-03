import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderForm from '../components/OrderForm';
import ReviewForm from '../components/ReviewForm';
import Navbar from '../components/Navbar';
import './Dashboard.css'

const Dashboard = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  }, [token, refresh]);

  const handleOrderCreated = () => {
    setRefresh(!refresh);
  };

  const handleReviewCreated = () => {
    setRefresh(!refresh);
  };

  const acceptOrder = async (orderId) => {
    try {
      await axios.patch(`http://localhost:3001/api/orders/${orderId}`, { status: 'accepted' }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error accepting order', error);
    }
  };

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <div className="dashboard__orders">
      <OrderForm token={token} onOrderCreated={handleOrderCreated} />
      <ReviewForm token={token} onReviewCreated={handleReviewCreated} />
      </div>
      <h2>Available Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <span>{order.description}</span>
            <span>{order.location}</span>
            <span>${order.budget}</span>
            <span>Status: {order.status}</span>
            {order.status === 'pending' && (
              <button onClick={() => acceptOrder(order._id)}>Accept Order</button>
            )}
          </li>
        ))}
      </ul>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review._id}>
            <span>{review.rating} stars</span>
            <span>{review.comment}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
