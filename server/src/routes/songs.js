import express from 'express'
import MovieController from '../controllers/MovieController.js'

const router = express.Router()

router.get('/', MovieController.getAll)
router.get('/:id', MovieController.getById)
router.post('/', MovieController.insert)
router.put('/:id', MovieController.update)
router.delete('/:id', MovieController.remove)

export { router as movieRouter }
