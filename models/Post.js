import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    imagePath: {type: String},
    likes: {type: Number, required: true, default: 0},
    createdAt: { type: Date, default: Date.now, required: true }
})

const Post = mongoose.model('Post', postSchema)

export default Post