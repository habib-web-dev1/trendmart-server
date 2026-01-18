const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ahserver.lso3nfx.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Global collection variables
let productsCollection;
let usersCollection;

async function connectDB() {
  try {
    const db = client.db("trendmart");
    productsCollection = db.collection("products");
    usersCollection = db.collection("users"); // Added users collection
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
}

// --- USER ROUTES ---

// 1. Create User (Save to DB on Register)
app.post("/users", async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  const existingUser = await usersCollection.findOne(query);

  if (existingUser) {
    return res.send({ message: "User already exists", insertedId: null });
  }

  const result = await usersCollection.insertOne({
    ...user,
    role: "user", // Default role
    createdAt: new Date(),
  });
  res.send(result);
});

// 2. Get User Role
app.get("/users/role/:email", async (req, res) => {
  const email = req.params.email;
  const user = await usersCollection.findOne({ email });
  res.send({ role: user?.role || "user" });
});

// 3. Get All Users (Admin Only Feature)
app.get("/users", async (req, res) => {
  const result = await usersCollection.find().toArray();
  res.send(result);
});

// 4. Update User Role (Admin promoting a user)
app.patch("/users/role/:id", async (req, res) => {
  const id = req.params.id;
  const { role } = req.body;
  const filter = { _id: new ObjectId(id) };
  const updateDoc = { $set: { role: role } };
  const result = await usersCollection.updateOne(filter, updateDoc);
  res.send(result);
});

// --- EXISTING PRODUCT ROUTES ---
app.get("/products", async (req, res) => {
  const result = await productsCollection.find().toArray();
  res.send(result);
});

app.get("/products/:id", async (req, res) => {
  const result = await productsCollection.findOne({
    _id: new ObjectId(req.params.id),
  });
  res.send(result);
});

app.post("/products", async (req, res) => {
  const result = await productsCollection.insertOne({
    ...req.body,
    createdAt: new Date(),
  });
  res.send(result);
});

app.delete("/products/:id", async (req, res) => {
  const result = await productsCollection.deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.send({ success: result.deletedCount > 0 });
});

// Initialize
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`TrendMart Server running on http://localhost:${port}`);
  });
});
