import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    firstName: String,
    lastName: String
});
module.exports = mongoose.model('User', userSchema);
//# sourceMappingURL=user.js.map