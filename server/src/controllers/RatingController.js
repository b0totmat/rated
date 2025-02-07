import { Rating } from "../models.js"

async function getAll(req, res) {
    try {
        const ratings = await Rating.findAll()
        res.status(200).json(ratings)
    } catch(e) {
        res.status(500)
    }
}

async function getById(req, res) {
    const id = req.params.id
    
    try {
        const rating = await Rating.findByPk(id)

        if(!rating) {
            res.status(404).json({ message: 'Rating not found.' })
        }

        res.status(200).json(rating)
    } catch(e) {
        res.status(500)
    }
}

async function insert(req, res) {
    try {
        const newRating = await Rating.create(req.body)
        res.status(201).json(newRating)
    } catch(e) {
        res.status(500)
    }
}

async function update(req, res) {
    const id = req.params.id

    try {
        const ratingToUpdate = await Rating.findByPk(id)

        if(!ratingToUpdate) {
            res.status(404).json({ message: 'Rating not found.' })
        }

        await ratingToUpdate.update(req.body)
        res.status(200).json(ratingToUpdate)
    } catch(e) {
        res.status(500)
    }
}

async function remove(req, res) {
    const id = req.params.id

    try {
        const ratingToDelete = await Rating.findByPk(id)

        if(!ratingToDelete) {
            res.status(404).json({message: 'Rating not found.'})
        }

        await ratingToDelete.destroy()
        res.status(204).end()
    } catch(e) {
        res.status(500)
    }
}

export default { getAll, getById, insert, update, remove }
