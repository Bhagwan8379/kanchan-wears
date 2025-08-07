const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validator = require("validator")
const { checkEmpty } = require("../utils/checkEmpty")
const Auth = require("../model/Auth")

exports.registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, cpassword, mobile } = req.body
    const { error, isError } = checkEmpty({ name, email, mobile, cpassword, password })
    if (isError) {
        return res.status(400).json({ message: "All Fields Required", error })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" })
    }
    if (mobile && !validator.isMobilePhone(mobile, "en-IN")) {
        return res.status(400).json({ message: "Invalid Mobile Number" })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "Provide Strong Password" })
    }
    if (password !== cpassword) {
        return res.status(400).json({ message: "password and Confirm Password Not Matched" })
    }
    const isFound = await Auth.findOne({ $or: [{ email: username }, { mobile: username }] })
    if (isFound) {
        return res.status(400).json({ message: "User Already Exist" })
    }
    const hash = await bcrypt.hash(password, 10)
    await Auth.create({ name, email, mobile, password: hash })
    res.json({ message: "User Register Success" })
})

exports.loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    const isFound = await Auth.findOne({ $or: [{ email: username }, { mobile: username }] })
    if (!isFound) {
        return res.status(400).json({ message: "User Not Found " })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "Provide Strong Password" })
    }
    const verify = await bcrypt.compare(password, isFound.password)
    if (!verify) {
        return res.status(400).json({ message: "Password Not Matched" })
    }
    const token = jwt.sign({ userId: isFound._id }, process.env.JWT_KEY, { expiresIn: "1d" })
    res.cookie("User", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })
    res.json({
        message: "User Login Success", data: {
            _id: isFound._id,
            name: isFound.name,
            email: isFound.email
        }
    })

})

exports.loginAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    const isFound = await Auth.findOne({ $or: [{ email: username }, { mobile: username }] })
    if (!isFound) {
        return res.status(400).json({ message: "Admin Not Found " })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "Provide Strong Password" })
    }
    const verify = await bcrypt.compare(password, isFound.password)
    if (!verify) {
        return res.status(400).json({ message: "Password Not Matched" })
    }
    const token = jwt.sign({ userId: isFound._id }, process.env.JWT_KEY, { expiresIn: "1d" })
    res.cookie("Admin", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })
    res.json({
        message: "Admin Login Success", data: {
            _id: isFound._id,
            name: isFound.name,
            email: isFound.email
        }
    })

})

exports.LogoutUser = asyncHandler(async (req, res) => {
    res.clearCookie("User")
    res.json({ message: "User Logout Success" })
})
exports.LogoutAdmin = asyncHandler(async (req, res) => {
    res.clearCookie("Admin")
    res.json({ message: "Admin Logout Success" })
})



// exports.registerAdmin = asyncHandler(async (req, res) => {
//     const { name, email, password, cpassword, mobile } = req.body
//     const { error, isError } = checkEmpty({ name, email, mobile, cpassword, password })
//     if (isError) {
//         return res.status(400).json({ message: "All Fields Required", error })
//     }
//     if (!validator.isEmail(email)) {
//         return res.status(400).json({ message: "Invalid Email" })
//     }
//     if (mobile && !validator.isMobilePhone(mobile, "en-IN")) {
//         return res.status(400).json({ message: "Invalid Mobile Number" })
//     }
//     if (!validator.isStrongPassword(password)) {
//         return res.status(400).json({ message: "Provide Strong Password" })
//     }
//     if (password !== cpassword) {
//         return res.status(400).json({ message: "password and Confirm Password Not Matched" })
//     }
//     const hash = await bcrypt.hash(password, 10)
//     await Auth.create({ name, email, mobile, password: hash, role: "admin" })
//     res.json({ message: "Admin Register Success" })

// })