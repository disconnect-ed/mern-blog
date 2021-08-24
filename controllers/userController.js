import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const createAdmin = async () => {
    const candidate = await User.findOne({userName: 'admin'})
    if (candidate) {
        return null
    }
    const hashPassword = bcrypt.hashSync('admin', 7)
    const admin = new User({
        email: 'admin@example.com',
        password: hashPassword,
        userName: 'admin',
        isAdmin: true
    })
    await admin.save()
}

const userRegistration = async (req, res) => {
    const {email, password, userName} = req.body
    let candidate = await User.findOne({email})
    if (candidate) {
        return res.json({message: "Пользователь с таким адресом уже существует"})
    }
    candidate = await User.findOne({userName})
    if (candidate) {
        return res.json({message: "Пользователь с таким ником уже существует"})
    }
    const hashPassword = bcrypt.hashSync(password, 7)
    const user = new User({email, userName, password: hashPassword})
    await user.save()
    res.json({message: "Пользователь успешно зарегестрирован"})
}

const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({message: `Пользователь с адресом ${email} не найден`})
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({message: `Введен неверный пароль`})
        }
        const payload = {id: user._id}
        const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '24h'})
        return res.json({token})
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Login error'})
    }
}


export {userRegistration, createAdmin, userLogin}