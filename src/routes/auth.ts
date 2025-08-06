import { Router, Request, Response } from 'express';
import { User, IUserDocument } from '../models/User';
import { authenticateToken, generateToken } from '../middleware/auth';
import { validateLogin, validateSignup } from '../middleware/validation';
import { IAuthResponse } from '../types/user.types';

const router = Router();

// Signup route
router.post('/signup', validateSignup, async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Create new user
    const user = new User({
      fullName,
      email,
      password
    }) as IUserDocument;

    await user.save();

    // Generate token
    const token = generateToken(user._id.toString());

    // Prepare response
    const response: IAuthResponse = {
      user: {
        _id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        createdAt: user.createdAt
      },
      token
    };

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: response
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Login route
router.post('/login', validateLogin, async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user by email and include password for comparison
    const user = await User.findOne({ email }).select('+password') as IUserDocument | null;
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate token
    const token = generateToken(user._id.toString());

    // Prepare response
    const response: IAuthResponse = {
      user: {
        _id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        createdAt: user.createdAt
      },
      token
    };

    res.json({
      success: true,
      message: 'Login successful',
      data: response
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get current user profile
router.get('/profile', authenticateToken, async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    
    res.json({
      success: true,
      message: 'Profile retrieved successfully',
      data: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Logout route (client-side token removal)
router.post('/logout', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Logout successful'
  });
});

export default router; 