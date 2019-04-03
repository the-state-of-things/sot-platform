const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: 'lmcs97@gmail.com',
        firstName: 'Louis',
        lastName: 'Slater'
    });
    user.save().then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });
    res.send('Hello');
})

module.exports = router;