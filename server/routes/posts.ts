import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user';


const router = express.Router();

router.get('/', (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: 'lmcs97@gmail.com',
        firstName: 'Louis',
        lastName: 'Slater',
    });
    user.save().catch((err: Error) => {
        console.error(err); // TODO: No console.error on live app?
    });
    res.send('Hello'); // TODO: Remove this?
});

export default router;
