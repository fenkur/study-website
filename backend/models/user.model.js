import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minLength: 3,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 6,
        select: false, // Prevents password from being returned
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;