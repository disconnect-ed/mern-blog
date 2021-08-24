import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        required: true,
        type: String
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    imagePath: {
        type: String,
        required: true,
        default: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
    }
})

const User = mongoose.model('User', userSchema)

export default User

