<div align="center">

# 🛠️ TrendMart API — Server Side

### _The Robust Backend Engine for Modern E-commerce_

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[**Live API**](https://your-server-link.vercel.app) | [**Frontend Repo**](https://github.com/habib-web-dev1/trendmart-client)

</div>

---

## 🌟 Overview

This is the RESTful API server for **TrendMart**. It is built with **Express.js 5.1** and serves as the primary data bridge between **MongoDB Atlas** and the Next.js frontend. The server manages complex operations including product inventory CRUD, role-based user management, and secure data persistence.

---

## 🛠️ Tech Stack & Architecture

- **Runtime:** Node.js (v18+)
- **Framework:** Express.js (v5.1.0)
- **Database:** MongoDB (NoSQL)
- **Middleware:** CORS, Dotenv, Error-Handling
- **Environment:** Securely managed via `.env` variables

---

## 🔌 API Endpoints

### 📦 Product Management

| Method   | Endpoint        | Description                     |
| :------- | :-------------- | :------------------------------ |
| `GET`    | `/products`     | Retrieve all products (Public)  |
| `GET`    | `/products/:id` | Retrieve single product details |
| `POST`   | `/products`     | Create new product (Admin Only) |
| `DELETE` | `/products/:id` | Remove product from inventory   |

### 👥 User & Role Management

| Method  | Endpoint             | Description                       |
| :------ | :------------------- | :-------------------------------- |
| `POST`  | `/users`             | Create/Sync user with database    |
| `GET`   | `/users`             | Retrieve user list (Admin Only)   |
| `GET`   | `/users/role/:email` | Verify user permissions           |
| `PATCH` | `/users/role/:id`    | Update user status (User ↔ Admin) |

---

## 📊 Data Models

### Products Collection

The product schema is optimized for search and filtering, featuring fields for price indexing and category sorting.

### Users Collection

Stores synchronized data from Firebase, mapping **UIDs** to roles to facilitate secure route protection on the frontend.

---

## 🚀 Setup & Local Development

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/habib-web-dev1/trendmart-server.git](https://github.com/habib-web-dev1/trendmart-server.git)
   cd trendmart-server
   ```

---

## ⚙️ Core Logic & Configuration

- **🔌 Database Connectivity**: Implemented a robust MongoDB connection logic using a singleton-style pattern to ensure stable, persistent connectivity on server startup and prevent multiple connection overhead.
- **🛡️ Graceful Error Handling**: Features a centralized global error-handling middleware. This ensures that every API request—whether successful or failed—returns a consistent JSON response with appropriate **HTTP Status Codes** and developer-friendly error messages.
- **🌐 CORS Management**: Securely configured **Cross-Origin Resource Sharing (CORS)** to whitelist specific frontend domains, ensuring that data is only accessible by the authorized TrendMart client application.

---

## 📬 Contact & Support

<div align="center">

**I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahsan-habib-coder/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/habib-web-dev1)
[![Email](https://img.shields.io/badge/Email-habibmdahsan08%40gmail.com-EE4B2B?style=for-the-badge&logo=gmail&logoColor=white)](mailto:habibmdahsan08@gmail.com)

<br/>

**Md Ahsan Habib** _MERN Stack Developer_

</div>
