import express from 'express'
import RatingController from '../controllers/RatingController.js'

const router = express.Router()

router.get('/', RatingController.getAll)
router.get('/:id', RatingController.getById)
router.post('/', RatingController.insert)
router.put('/:id', RatingController.update)
router.delete('/:id', RatingController.remove)

export { router as ratingRouter }
