import mongoose from 'mongoose'

export {
    Trivia
}

const Schema = mongoose.Schema

const triviaSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
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

const Trivia = mongoose.model("trivia", triviaSchema)