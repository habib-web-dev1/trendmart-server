<div align="center">

# 🛠️ TrendMart API — Server Side

### _The Robust Backend Engine for Modern E-commerce_

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[**🌐 Live Demo**](https://trendmart-client.vercel.app) | [**Frontend Repo**](https://github.com/habib-web-dev1/trendmart-client)

</div>

---

## 🌟 Project Overview

The **TrendMart API** is a fully-featured RESTful backend built with **Express.js 5.1**.  
It provides a secure, scalable data layer for the Next.js frontend, managing **product inventory**, **user roles**, and **persistent shopping data**.  

Key highlights:

- Role-based access control for admin and standard users
- CRUD operations for products and user management
- Optimized for performance and secure API requests

---

## 🛠️ Tech Stack & Architecture

| Layer           | Technology / Tool                 |
|-----------------|----------------------------------|
| **Runtime**     | Node.js v18+                      |
| **Framework**   | Express.js v5.1                   |
| **Database**    | MongoDB (Atlas)                   |
| **Middleware**  | CORS, Dotenv, Error Handling      |
| **Deployment**  | Vercel / any Node-compatible host |

---

## 🔌 API Endpoints

### 📦 Product Management

| Method   | Endpoint        | Description                       |
| :------- | :-------------- | :-------------------------------- |
| `GET`    | `/products`     | Retrieve all products (Public)     |
| `GET`    | `/products/:id` | Retrieve single product details    |
| `POST`   | `/products`     | Add a new product (Admin Only)     |
| `PUT`    | `/products/:id` | Update product details (Admin Only)|
| `DELETE` | `/products/:id` | Remove product from inventory      |

### 👥 User & Role Management

| Method  | Endpoint             | Description                       |
| :------ | :------------------- | :-------------------------------- |
| `POST`  | `/users`             | Add or sync a user with the database |
| `GET`   | `/users`             | Retrieve all users (Admin Only)     |
| `GET`   | `/users/role/:email` | Check user role (Admin verification)|
| `PATCH` | `/users/role/:id`    | Promote/Demote user (User ↔ Admin) |

---


## ⚙️ Core Features & Developer Notes

- **Database Connectivity:** Singleton-style MongoDB connection for stable, efficient access.
- **Error Handling:** Centralized middleware ensures consistent JSON responses and HTTP status codes.
- **CORS Management:** Restricts API access to authorized frontend domains.
- **Security:** Role-based route protection for admin-only endpoints.
- **Scalability:** Modular architecture allows easy expansion and microservice integration.

---

## 📬 Contact & Support

<div align="center">

**Open to collaborations, feedback, and new opportunities.**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahsan-habib-coder/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/habib-web-dev1)
[![Email](https://img.shields.io/badge/Email-habibmdahsan08%40gmail.com-EE4B2B?style=for-the-badge&logo=gmail&logoColor=white)](mailto:habibmdahsan08@gmail.com)

**Md Ahsan Habib** _MERN Stack Developer_

</div>


---

## 📊 Data Models

### Products Collection

- Optimized for **search** and **filtering**
- Fields include: `name`, `description`, `price`, `category`, `imageURL`, `stock`

### Users Collection

- Maps **Firebase UIDs** to roles
- Supports **role-based route protection** and admin verification

---

## 🚀 Setup & Local Development

1. **Clone the repository**

```bash
git clone https://github.com/habib-web-dev1/trendmart-server.git
cd trendmart-server


