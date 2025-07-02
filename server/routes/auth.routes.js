const { registerAdmin, registerUser, loginAdmin, LogoutAdmin, loginUser, LogoutUser } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/register-admin", registerAdmin)
    .post("/login-admin", loginAdmin)
    .post("/logout-admin", LogoutAdmin)

    .post("/register-user", registerUser)
    .post("/login-user", loginUser)
    .post("/logout-user", LogoutUser)

module.exports = router