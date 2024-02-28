const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
        aboutYou: { type: String,default: null },
        age: { type: Number,default:0},
        agreetc: { type: Boolean,default: false},
        dob: { type: String,default: null },
        email: { type: String,default: null },
        gender: { type: String,default: null },
        address: {
            id: { type: Number,default:0},
            addLine1: { type: String,default: null },
            addLine2: { type: String,default: null },
            city: { type: String,default: null },
            state: { type: String,default: null },
            zipCode: { type: Number,default:0},
        },
        language: { type: String,default: null },
        mobNumber: { type: String,default: null },
        name: { type: String,default: null },
        password: { type: String,default: null },
        uploadPhoto: { type: String,default: null },
        role: { type: String,default: null },
    });

    userSchema.statics.findByEmailAndPassword = async function(email, password) {
    // Perform the query to find a user with the specified email and password
    return await this.findOne({ email, password });
};
const User = mongoose.model('User', userSchema);

module.exports = User;