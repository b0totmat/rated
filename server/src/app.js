import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { sequelize } from './models.js'
import { movieRouter } from './routes/songs.js'
import { ratingRouter } from './routes/ratings.js'
import { authRouter } from './routes/auth.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

app.use('/movies', movieRouter)
app.use('/ratings', ratingRouter)
app.use('/users', authRouter)

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})
