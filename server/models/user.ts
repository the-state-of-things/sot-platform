import mongoose from 'mongoose';
//TODO: Allow local db. Would also need script to dump db into json file.
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    firstName: String,
    lastName: String,
});

export default mongoose.model('User', userSchema);
