import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import crypto from "crypto";
import nodemailer from "nodemailer";

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // e.g., amnakhalidcode@gmail.com
    pass: process.env.EMAIL_PASS  // Use env variables for security
  }
});


// register user
export const registerUser = async (req, res) => {
  try {
    const { email, password, phoneNumber } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


// signin user
export const signInUser = async (req, res) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const payload = {
      id: user._id,
      email: user.email,
      role: user.role
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    const userData = user.toObject();
    delete userData.password;

    res.status(200).json({
      message: "Login successful",
      token,
      user: userData
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ 
      message: err.message || "Server error during authentication" 
    });
  }
};





// get user data
export const getUserData = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ 
      status: "error", 
      message: "Token is required" 
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ email: decoded.email }).select('-password');

    if (!user) {
      return res.status(404).json({ 
        status: "error", 
        message: "User not found" 
      });
    }

    return res.status(200).json({ 
      status: "ok", 
      data: user 
    });

  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        status: "error", 
        message: "Token expired" 
      });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        status: "error", 
        message: "Invalid token" 
      });
    }
    console.error("Server error:", error);
    return res.status(500).json({ 
      status: "error", 
      message: "Internal server error" 
    });
  }
};


// forget Password

// export const forgotPassword = async (req, res) => {
//   const { email } = req.body;

//   try {
//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Generate reset token
//     const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
//     // Save reset token to user
//     user.resetPasswordToken = resetToken;
//     user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
//     await user.save();

//     // Create reset URL
//     const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    
//     // Setup email data
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: user.email,
//       subject: 'Password Reset Request',
//       html: `
//         <h1>Reset Your Password</h1>
//         <p>You requested a password reset. Click the link below to reset your password:</p>
//         <a href="${resetUrl}" style="padding: 10px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
//         <p>This link will expire in 1 hour.</p>
//         <p>If you didn't request this, please ignore this email.</p>
//       `
//     };

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//       }
//     });

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return res.status(200).json({ message: "Password reset email sent" });
//   } catch (err) {
//     console.error("Forgot password error:", err);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // Reset Password Route Handler
// export const resetPassword = async (req, res) => {
//   const { token, newPassword } = req.body;

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     // Find user by id and token
//     const user = await User.findOne({
//       _id: decoded.id,
//       resetPasswordToken: token,
//       resetPasswordExpires: { $gt: Date.now() }
//     });

//     if (!user) {
//       return res.status(400).json({ message: "Invalid or expired token" });
//     }

//     // Hash new password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(newPassword, salt);

//     // Update user password
//     user.password = hashedPassword;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;
//     await user.save();

//     return res.status(200).json({ message: "Password reset successful" });
//   } catch (err) {
//     console.error("Reset password error:", err);
//     if (err.name === 'TokenExpiredError') {
//       return res.status(400).json({ message: "Token expired" });
//     }
//     return res.status(500).json({ message: "Server error" });
//   }
// };
