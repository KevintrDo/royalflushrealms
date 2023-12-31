const express = require('express');
const bcryptjs = require("bcryptjs");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const User = require('../../models/User');
//const Bathroom = require('../../models/Bathroom');


userRouter.post("/signup", async (req, res) => {
    console.log(req.body);
    try {
        const { email, password, confirmPassword, username} = req.body;
        if (!email || !password || !username || !confirmPassword) {
            return res.status(400).json({ msg: "Please enter all the fields"});
        }
        if (password.length < 6) {
            return res 
                .status(400)
                .json({ msg: "Password should be at least 6 characters"});
        }
        if (confirmPassword !== password) {
            return res.status(400).json({ msg: "Both the passwords dont match"});
        }
        const extistingUser = await User.findOne({ email });
        if (extistingUser) {
            return res 
                .status(400)
                .json({ msg: "User with the same email already exists "});
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({ email, password: hashedPassword, username});

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
);

userRouter.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "Please enter all the fields"});
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res 
                .status(400)
                .send({ msg: "User with this email does not exist"});
        }
        
        const isMatch = await bcryptjs.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).send({ msg: "Incorrect password."});
        }
        const token = jwt.sign({ id: user._id}, "passwordKey");
        res.json({ token, user: { id: user._id, username: user.username}});
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

userRouter.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

userRouter.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        username: user.username,
        id: user._id,
    });
});

{/*
userRouter.post('/add-item', async (req, res) => {
  try {
        const {itemKey, img, title, comment, date, side} = req.body;
        const newBathroom = new Bathroom({itemKey, img, title, comment, date, side});
        const savedBathroom = await newBathroom.save();
        console.log(req.body);
        res.json(savedBathroom);
        } catch (error) {
        console.error('Error adding item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
});*/}

module.exports = userRouter;