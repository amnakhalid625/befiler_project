import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: [true, 'Please enter your email'], 
        unique: true, 
        validate: [validator.isEmail, 'Please enter a valid email address']
      },
      googleId: { type: String },
    
      password: { 
        type: String, 
        required: false,
        minLength: [6, 'Password must be at least 6 characters long']
      },
    
      phoneNumber: {
        type: String,
        required: false, 
        match: [/^(03\d{9}|\+923\d{9})$/, "Please enter a valid phone number"]
      },
    
      resetPasswordToken: { type: String },
      resetPasswordExpires: { type: Date }
      
});

const User = mongoose.model("User", userSchema);

export default User;
