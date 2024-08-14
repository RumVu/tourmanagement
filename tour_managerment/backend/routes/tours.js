import express from 'express'
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour, getFeaturedTour, getTourCount, getTourBySearch } from '../controllers/tourController.js';
const router = express.Router()
import { verifyAdmin } from '../utils/verifyToken.js';
//create new tour
router.post('/', verifyAdmin, createTour);
// update tour
router.put('/:id', verifyAdmin, updateTour);
// delete tour
router.delete('/:id', verifyAdmin, deleteTour);
// getSingle tour
router.get('/:id', getSingleTour);
// getAll tour
router.get('/', getAllTour);
// get tour by search
router.get('/search/getTourBySearch', getTourBySearch);
router.get('/search/getFeaturedTours', getFeaturedTour);
router.get('/search/getTourCount', getTourCount);
export default router;