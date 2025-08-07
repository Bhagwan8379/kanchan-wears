const jwt = require("jsonwebtoken")

exports.adminProtected = (req, res, next) => {
    const { Admin } = req.cookies
    if (!Admin) {
        return res.status(401).json({ message: "Cookie Not Found" })
    }
    jwt.verify(Admin, process.env.JWT_KEY, (error, decode) => {
        if (error) {
            console.log(error)
            return res.status(401).json({ message: "Invalid Token" })
        }
        req.user = decode.userId

    })
    next()
}


// User Protected

exports.userProtected = (req, res, next) => {
    const { User } = req.cookies
    if (!User) {
        return res.status(401).json({ message: "Cookie Not Found" })
    }
    jwt.verify(User, process.env.JWT_KEY, (error, decode) => {
        if (error) {
            console.log(error)
            return res.status(401).json({ message: "Invalid Token" })
        }
        req.user = decode.userId

    })
    next()
}