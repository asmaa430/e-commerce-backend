# 🛍️ E-Commerce Backend

A powerful and modular **backend API** for an e-commerce application built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
This project provides all the essential backend functionalities for an online store — including user authentication, product management, and order processing.

---

## 📁 Project Structure

e-commerce-backend/
│
├── src/
│ ├── config/ # Database connection & environment setup
│ ├── controllers/ # Business logic for each resource (User, Product, Order, etc.)
│ ├── models/ # Mongoose schemas and models
│ ├── routes/ # Express routes (API endpoints)
│ ├── middlewares/ # Authentication, error handling, etc.
│ ├── utils/ # Helper functions (token generation, email, etc.)
│ └── server.js # Entry point
│
├── package.json
├── .env.example # Example environment variables
└── README.md

---

## ⚙️ Features

✅ User authentication (Register, Login, JWT tokens)  
✅ Role-based access (Admin & Regular users)  
✅ Product management (CRUD operations)  
✅ Order creation and tracking  
✅ Centralized error handling  
✅ MongoDB connection with Mongoose  
✅ Environment variable configuration  
✅ Ready for Postman / API testing  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/asmaa430/e-commerce-backend.git
cd e-commerce-backend
```
2️⃣ Install Dependencies
```bash
npm install
```
3️⃣ Environment Variables

Create a .env file in the root directory and add the following:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
4️⃣ Run the Server
Development Mode (with Nodemon)
```bash
npm run dev
```
Production Mode
```bash
npm start
```
🧩 API Endpoints
| Method   | Endpoint             | Description             | Auth Required |
| -------- | -------------------- | ----------------------- | ------------- |
| `POST`   | `/api/auth/register` | Register a new user     | ❌ No          |
| `POST`   | `/api/auth/login`    | Login and get JWT token | ❌ No          |
| `GET`    | `/api/products`      | Get all products        | ❌ No          |
| `GET`    | `/api/products/:id`  | Get a single product    | ❌ No          |
| `POST`   | `/api/products`      | Create a new product    | ✅ Admin       |
| `PATCH`    | `/api/products/:id`  | Update a product        | ✅ Admin       |
| `DELETE` | `/api/products/:id`  | Delete a product        | ✅ Admin       |
| `POST`   | `/api/orders`        | Create an order         | ✅ Yes         |
| `GET`    | `/api/orders/:id`    | Get order by ID         | ✅ Yes         |
| `GET`    | `/api/orders`        | Get all orders (Admin)  | ✅ Admin       |
🔐 Authentication & Authorization

Users must log in to access protected routes.

Use the JWT token returned by /api/auth/login.

Add it to your request headers:
```makeafile
Authorization: Bearer <your_token_here>
```
Admin users can manage products and view all orders.
🧠 Error Handling

All errors are handled globally through a centralized error middleware.
You’ll receive consistent responses such as:

{
  "message": "Order not found",
  "statusCode": 404
}

🧰 Common Utilities

asyncHandler → wraps async routes to avoid repetitive try/catch.

mongoose.Types.ObjectId.isValid(id) → used to validate ObjectId before querying.

JWT Token Generator → creates secure access tokens for users.

Error Middleware → returns uniform error responses for better debugging.

🧪 Testing with Postman

Import your endpoints into Postman.

Test authentication by registering & logging in.

Use the returned JWT token for all protected routes.

Try creating products and placing orders.

👩‍💻 Typical User Flow

Register a new account.

Login and get a JWT token.

Browse available products.

Add products to cart (frontend responsibility).

Create an order via /api/orders.

View your previous orders.

Admin can manage all products and orders.

🧾 Example Response

POST /api/auth/login

{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "68f1706a93ac405513fb9640",
    "name": "Asmaa Mahmoud",
    "email": "asmaa@example.com",
    "role": "user"
  }
}

🧱 Built With

Node.js

Express

MongoDB

Mongoose

JWT

dotenv

bcryptjs

express-async-handler

🧭 Future Improvements

🧾 Payment integration (Stripe / PayPal)

🖼️ Product image uploads (Cloudinary or S3)

📧 Email notifications for orders

🧪 Unit and integration testing

🌐 Full frontend integration (React / Flutter)

🤝 Contribution

Contributions are welcome!

Fork the repository

Create a new branch:

git checkout -b feature/your-feature


Commit your changes

Push to your fork

Create a pull request 🎉
🪪 License

This project is licensed under the MIT License.

💬 Author

Asmaa Mahmoud
Backend Developer — Node.js
GitHub: asmaa430
