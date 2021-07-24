import mongoose, { Schema } from 'mongoose'

export {
    Comment
}

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    commenter: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
}, {
    timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)