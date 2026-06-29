const User = require("../models/user");

// require bcrypt
const bcrypt = require("bcrypt");

// require jwt
const jwt = require("jsonwebtoken");

// test auth controller
exports.test = async (req, res) => {
    try {
        return res.status(200).send("Auth test controller is working")
    } catch (error) {
        return res.status(500).send("Error in test auth controller: " + error);
    }
}

// register auth controller
exports.register = async (req, res) => {
    try {
        const {email, password} = req.body
        const existingEmail = await User.findOne({email})
        if (existingEmail) {
            return res.status(400).send({errors: [{msg: "Email already exists"}]})
        }
        const newUser = new User(req.body)
        // hash password
        const salt = 10
        const hashedPassword = await bcrypt.hash(password, salt)
        newUser.password = hashedPassword
        await newUser.save()
        // create token
        const token = jwt.sign({
            id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
        },
        process.env.SECRET_KEY,
        {expiresIn: "7d"}
    )
        return res.status(201).send({success: [{msg: "User registered successfully"}], user: newUser, token: token})
    } catch (error) {
        return res.status(500).send({errors: [{msg: "Server error registering user"}], error: error})
    }
}

// login auth controller
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({ email });
      if (!foundUser) {
        return res.status(404).send({ errors: [{ msg: "User not found" }] });
      }
      const hashedPassword = await bcrypt.compare(password, foundUser.password);
      if (!hashedPassword) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Incorrect password" }] });
      }
      // create token
      const token = jwt.sign(
        {
          id: foundUser._id,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          email: foundUser.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
      );
      return res.status(200).send({
        success: [{ msg: "User logged in successfully" }],
        user: foundUser,
        token: token,
      }); 
    } catch (error) {
        return res.status(500).send({errors: [{msg: "Server error logging in user"}], error: error})
    }
}
