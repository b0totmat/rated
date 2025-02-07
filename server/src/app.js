import express from 'express'
import bodyParser from 'body-parser'
import { sequelize } from './models.js'
import { movieRouter } from './routes/songs.js'
import { ratingRouter } from './routes/ratings.js'

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use('/movies', movieRouter)
app.use('/ratings', ratingRouter)

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})
