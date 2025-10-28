import express from 'express';
import { getRandomDish, getRandomDishByCategory } from '../controllers/mealController.js';

const router = express.Router();

router.get('/', getRandomDish);
router.get('/:category', getRandomDishByCategory);

export default router;


