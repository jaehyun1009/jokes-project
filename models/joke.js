import mongoose from 'mongoose'

export {
    Joke
}

const Schema = mongoose.Schema

const jokeSchema = new Schema({
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
    creator: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }]
}, {
    timestamps: true
})

const Joke = mongoose.model("Joke", jokeSchema)