const express = require('express');
const router = express.Router();
const Review = require('../models/review');

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - user_id
 *         - order_id
 *         - rating
 *         - comment
 *       properties:
 *         user_id:
 *           type: string
 *           description: ID of the user who created the review
 *         order_id:
 *           type: string
 *           description: ID of the order being reviewed
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *           description: Rating given to the order
 *         comment:
 *           type: string
 *           description: Comment about the order
 *       example:
 *         user_id: "60c72b2f5f1b2c001c8e4d9a"
 *         order_id: "60c72b995f1b2c001c8e4d9b"
 *         rating: 5
 *         comment: "Great service!"
 */

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: API endpoints for managing reviews
 */

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       '201':
 *         description: Successfully created a review
 *       '400':
 *         description: Invalid request body
 *       '500':
 *         description: Internal server error
 */
router.post('/', async (req, res) => {
  const { user_id, order_id, rating, comment } = req.body;
  if (!user_id || !order_id || !rating || !comment) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const newReview = new Review({ user_id, order_id, rating, comment });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Retrieve a list of all reviews
 *     tags: [Reviews]
 *     responses:
 *       '200':
 *         description: A list of reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 *       '500':
 *         description: Internal server error
 */
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Retrieve a review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The review ID
 *     responses:
 *       '200':
 *         description: A review object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       '404':
 *         description: Review not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/**
 * @swagger
 * /api/reviews/{id}:
 *   put:
 *     summary: Update a review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The review ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       '200':
 *         description: Successfully updated the review
 *       '404':
 *         description: Review not found
 *       '400':
 *         description: Invalid request body
 *       '500':
 *         description: Internal server error
 */
router.put('/:id', async (req, res) => {
  const { user_id, order_id, rating, comment } = req.body;
  if (!user_id || !order_id || !rating || !comment) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { user_id, order_id, rating, comment },
      { new: true, runValidators: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Delete a review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The review ID
 *     responses:
 *       '200':
 *         description: Successfully deleted the review
 *       '404':
 *         description: Review not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id', async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json({ message: 'Review successfully deleted' });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
