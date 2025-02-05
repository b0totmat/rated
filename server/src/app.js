import express from 'express'
import bodyParser from 'body-parser'
import { sequelize } from './models.js'
import { movieRouter } from './routes/songs.js'

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/movies', movieRouter)

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})
