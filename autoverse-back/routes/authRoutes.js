

// require express
const express = require('express');
const { test, register, login } = require('../controllers/authControllers');
const { registerValidation, validator } = require("../middlewares/validator");
const isAuth = require('../middlewares/isAuth');

// get router from express
const Router = express.Router();

// route test
Router.get("/test", test)

// register route
Router.post("/register", registerValidation(), validator, register);

// login route
Router.post("/login", login)

// current route
Router.get("/current", isAuth, (req, res) => {
    res.status(200).send({ success: [{ msg: "You are authenticated" }], user: req.user })
})


// export Router
module.exports = Router;