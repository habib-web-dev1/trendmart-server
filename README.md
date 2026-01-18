# TrendMart Server - Express.js API

## 🌟 Project Description

This is the backend API server for the TrendMart e-commerce application, built with Express.js and MongoDB. It provides RESTful endpoints for product management, user authentication, and data persistence.

## 🛠️ Technologies Used

- **Express.js 5.1.0** - Web framework for Node.js
- **MongoDB 7.0.0** - NoSQL database with native driver
- **CORS** - Cross-origin resource sharing middleware
- **dotenv** - Environment variable management

## 🔌 API Endpoints

### Product Management

- `GET /products` - Retrieve all products
- `GET /products/:id` - Retrieve single product by ID
- `POST /products` - Create new product
- `DELETE /products/:id` - Delete product by ID

### User Management

- `POST /users` - Create/save user to database
- `GET /users` - Retrieve all users (admin)
- `GET /users/role/:email` - Get user role by email
- `PATCH /users/role/:id` - Update user role

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database (local or cloud)

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env` file:

```env
PORT=5000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

## 📊 Database Schema

### Products Collection

```javascript
{
  _id: ObjectId,
  title: String,
  shortDescription: String,
  fullDescription: String,
  price: Number,
  category: String,
  imageUrl: String,
  createdAt: Date
}
```

### Users Collection

```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  uid: String, // Firebase UID
  image: String,
  role: String, // "user" or "admin"
  createdAt: Date
}
```

## 🔧 Configuration

The server connects to MongoDB using the connection string format:

```
mongodb+srv://${DB_USER}:${DB_PASS}@cluster.mongodb.net/trendmart
```

CORS is enabled for all origins in development. For production, configure specific origins as needed.

## 📝 Notes

- Server runs on port 5000 by default
- MongoDB connection is established on server startup
- All routes handle errors gracefully with appropriate HTTP status codes
- User roles system is implemented but can be extended for more granular permissions
