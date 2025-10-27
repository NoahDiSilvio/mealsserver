simport express from 'express';
import { getRandomDish, getRandomDishByCategory } from '../controllers/mealController.js';

const router = express.Router();

router.get('/meals', getRandomDish);
router.get('/meals/:category', getRandomDishByCategory);

export default router;
