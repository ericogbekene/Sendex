// In routes/orders.js

const express = require('express');
const router = express.Router();
const Order = require('../models/orders');


//swagger documentation

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - user_id
 *         - description
 *         - location
 *         - budget
 *       properties:
 *         user_id:
 *           type: string
 *           description: ID of the user who created the order
 *         description:
 *           type: string
 *           description: Description of the order
 *         location:
 *           type: string
 *           description: Location where the order needs to be carried out
 *         budget:
 *           type: number
 *           description: Budget allocated for the order
 *         status:
 *           type: string
 *           enum: [pending, accepted, in progress, completed]
 *           default: pending
 *           description: Status of the order
 */

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API endpoints for managing orders
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       '201':
 *         description: Successfully created an order
 *       '400':
 *         description: Invalid request body
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Retrieve a list of all orders
 *     tags: [Orders]
 *     responses:
 *       '200':
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       '500':
 *         description: Internal server error
 */


// GET /api/orders
router.get('/', async (req, res) => {
  try {
    // Find all orders in the database
    const getAllOrders = await Order.find();
    console.log(getAllOrders);

    // Return success response with orders
    res.status(200).json(getAllOrders);
  } catch (error) {
    // Return error response
    console.error('Error fetching Order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST /api/orders
router.post('/', async (req, res) => {
  try {
    // Validate request body
    const { user_id, description, location, budget, status } = req.body;
    if (!user_id || !description || !location || !budget || !status) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create new order object
    const newOrder = new Order({
      user_id,
      description,
      location,
      budget,
      status
    });

    // Save order to database
    const savedOrder = await newOrder.save();

    // Return success response
    res.status(201).json(savedOrder);
  } catch (error) {
    // Return error response
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Retrieve an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The order ID
 *     responses:
 *       '200':
 *         description: An order object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       '404':
 *         description: Order not found
 *       '500':
 *         description: Internal server error
 */

// get order by a searching for a specific ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;