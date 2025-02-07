import Sequelize from 'sequelize'
import bcrypt from 'bcrypt'

const { DataTypes } = Sequelize
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './rated.sqlite'
})

async function hashPassword(user) {
    if(!user.changed('password')) {
        return
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, salt)
    console.log(hashedPassword)
    
    return user.password = hashedPassword
}

const Movie = sequelize.define('movie', {
    movieId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER
    },
    director: {
        type: DataTypes.STRING
    }
})

const User = sequelize.define('user', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    hooks: {
        beforeSave: hashPassword
    }
})

const Rating = sequelize.define('rating', {
    ratingId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userId'
        }
    },
    movieId: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            key: 'movieId'
        }
    }
})

User.hasMany(Rating, { foreignKey: 'userId' })
Movie.hasMany(Rating, { foreignKey: 'movieId' })
Rating.belongsTo(User, { foreignKey: 'userId' })
Rating.belongsTo(Movie, { foreignKey: 'movieId' })

export { sequelize, Movie, User, Rating }
