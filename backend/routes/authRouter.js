import express from "express";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";
import {
  registerUser,
  signInUser,
  getUserData,
  // forgotPassword,
  // resetPassword
} from "../controllers/authController.js";

const router = express.Router();

// Initialize Google OAuth client
const createOAuthClient = () => {
  if (!process.env.GOOGLE_CLIENT_ID) {
    throw new Error("GOOGLE_CLIENT_ID is not configured");
  }
  return new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
};

// Middleware to validate request body
const validateGoogleSignIn = (req, res, next) => {
  if (!req.body.credential) {
    return res.status(400).json({
      success: false,
      message: "Missing Google credential token"
    });
  }
  next();
};

// Google Sign-In route with enhanced security
router.post("/google-signin", validateGoogleSignIn, async (req, res) => {
  const client = createOAuthClient();
  const { credential } = req.body;

  try {
    // Verify and decode the Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    
    const payload = ticket.getPayload();
    
    // Validate required fields from Google
    if (!payload.email || !payload.sub) {
      return res.status(400).json({
        success: false,
        message: "Invalid Google token payload"
      });
    }

    // Find or create user
    let user = await User.findOne({ 
      $or: [
        { email: payload.email },
        { googleId: payload.sub }
      ]
    });

    const userData = {
      email: payload.email,
      name: payload.name || `${payload.given_name || ''} ${payload.family_name || ''}`.trim(),
      googleId: payload.sub,
      isVerified: true,
      profilePicture: payload.picture || null
    };

    if (!user) {
      user = new User(userData);
      await user.save();
    } else {
      // Update existing user if needed
      if (!user.googleId) {
        user.googleId = payload.sub;
        await user.save();
      }
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        isVerified: user.isVerified
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    // Prepare response data
    const responseData = {
      success: true,
      message: "Google authentication successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        isVerified: user.isVerified,
        profilePicture: user.profilePicture
      }
    };

    // Set secure HTTP-only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000 // 1 hour
    });

    return res.status(200).json(responseData);

  } catch (error) {
    console.error("Google authentication error:", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });

    return res.status(500).json({
      success: false,
      message: "Authentication server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
});

// Existing routes
router.post("/register", registerUser);
router.post("/signin", signInUser);
router.post("/userData", getUserData);
// router.post("/forgot-password", forgotPassword);
// router.post("/reset-password", resetPassword);

export default router;