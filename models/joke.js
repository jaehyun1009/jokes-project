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
    },
    isNsfw: {
        type: Boolean
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },
    likedBy: [{
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {
    timestamps: true
})

const Joke = mongoose.model("Joke", jokeSchema)