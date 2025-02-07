import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { User } from "../models.js"

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, 'secret', {
        expiresIn: ONE_WEEK
    })
}

async function register(req, res) {
    try {
        const user = await User.create(req.body)
        const userJSON = user.toJSON()
        res.status(201).send({
            user: userJSON,
            token: jwtSignUser(userJSON)
        })
    } catch(e) {
        res.status(400).json({ message: e.message })
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email: email } })

        if(!user) {
            return res.status(403).json({ message: 'Login information incorrect.' })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid) {
            return res.status(403).json({ message: 'Login information incorrect.' })
        }

        const userJSON = user.toJSON()
        res.status(200).send({
            user: userJSON,
            token: jwtSignUser(userJSON)
        })
    } catch(e) {
        res.status(500).send({ message: e.message })
    }
}

export default { register, login }
