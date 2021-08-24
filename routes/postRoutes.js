import express from 'express'
const router = express.Router()
import {
    createPost,
    getAllPosts,
    getPost,
    deletePost,
    updatePost
} from "../controllers/postController.js";
import {authMiddleware} from "../middleware/authMiddleware.js";

router.post('/create', authMiddleware, createPost)
router.get('/getAllPosts', getAllPosts)
router.post('/getPost', getPost)
router.post('/deletePost', authMiddleware, deletePost)
router.put('/updatePost', authMiddleware, updatePost)

export default router

