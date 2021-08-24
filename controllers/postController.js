import Post from "../models/Post.js";

const createPost = async (req, res) => {
    try {
        const {title, text, imagePath, likes, createdAt} = req.body
        const post = new Post({
            title, text, imagePath, likes, createdAt
        })
        await post.save()
        res.json({message: 'Пост успешно создан'})
    } catch (e) {
        console.log(e)
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (e) {
        res.status(500).json(e)
    }
}

const getPost = async (req, res) => {
    try {
        const postId = req.body._id
        if (!postId) {
            res.status(400).json({message: "Не указан ID поста"})
        }
        const post = await Post.findById(postId)
        res.json(post)
    } catch (e) {
        res.status(500).json(e)
    }
}

const deletePost = async (req, res) => {
    try {
        const postId = req.body._id
        if (!postId) {
            res.status(400).json({message: "Не указан ID поста"})
        }
        const post = await Post.findByIdAndDelete(postId)
        if (!post) {
            res.json({message: 'Пост не найден'})
        }
        res.json({message: 'Пост успешно удален'})
    } catch (e) {
        res.status(500).json(e)
    }
}

const updatePost = async (req, res) => {
    try {
        const {title, text, imagePath} = req.body
        const postId = req.body._id
        if (!postId) {
            res.status(400).json({message: "Не указан ID поста"})
        }
        const post = await Post.findById(postId)
        post.title = title
        post.text = text
        post.imagePath = imagePath
        const updatedPost = await Post.findByIdAndUpdate(postId, post, {new: true})
        res.json({message: 'Пост успешно обновлен'})
    } catch (e) {

    }
}

export {createPost, getAllPosts, getPost, deletePost, updatePost}