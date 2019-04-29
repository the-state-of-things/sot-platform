import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
const User = require('../models/user');
router.get('/', (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: 'lmcs97@gmail.com',
        firstName: 'Louis',
        lastName: 'Slater'
    });
    user.save().then((result) => {
        console.log('REsULT', result); //TODO: Remove this?
    })
        .catch((err) => {
        console.log(err);
    });
    res.send('Hello'); //TODO: Remove this?
});
module.exports = router;
//# sourceMappingURL=posts.js.map