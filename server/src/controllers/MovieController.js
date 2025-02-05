import { Movie } from "../models.js"

async function getAll(req, res) {
    try {
        const movies = await Movie.findAll()
        res.status(200).json(movies)
    } catch(e) {
        res.status(500)
    }
}

async function getById(req, res) {
    const id = req.params.id
    
    try {
        const movie = await Movie.findByPk(id)

        if(!movie) {
            res.status(404).json({ message: 'Movie not found.' })
        }

        res.status(200).json(movie)
    } catch(e) {
        res.status(500)
    }
}

async function insert(req, res) {
    try {
        const newMovie = await Movie.create(req.body)
        res.status(201).json(newMovie)
    } catch(e) {
        res.status(500)
    }
}

async function update(req, res) {
    const id = req.params.id

    try {
        const movieToUpdate = await Movie.findByPk(id)

        if(!movieToUpdate) {
            res.status(404).json({ message: 'Movie not found.' })
        }

        await movieToUpdate.update(req.body)
        res.status(200).json(movieToUpdate)
    } catch(e) {
        res.status(500)
    }
}

async function remove(req, res) {
    const id = req.params.id

    try {
        const movieToDelete = await Movie.findByPk(id)

        if(!movieToDelete) {
            res.status(404).json({message: 'Movie not found.'})
        }

        await movieToDelete.destroy()
        res.status(204).end()
    } catch(e) {
        res.status(500)
    }
}

export default { getAll, getById, insert, update, remove }
