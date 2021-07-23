import mongoose from 'mongoose'

export {
    Joke
}

const jokeSchema = mongoose.Schema({

    setup: {
        type: String,
        required: true
    },

    punchline: {
        type: String,
        required: true
    },

    likes: {
        type: Number,
        default: 0
    },

    creator: []

})