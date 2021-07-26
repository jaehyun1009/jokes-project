import mongoose from 'mongoose'

export {
    Comment
}

const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    commenter: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
}, {
    timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)