const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ahserver.lso3nfx.mongodb.net/?retryWrites=true&w=majority`;

// Create client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    const db = client.db("trendmart");
    productsCollection = db.collection("products");
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
}

app.get("/", (req, res) => {
  res.send("TrendMart Server is Running!");
});

// GET all products
app.get("/products", async (req, res) => {
  try {
    const result = await productsCollection.find().toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch products" });
  }
});

// GET single product
app.get("/products/:id", async (req, res) => {
  try {
    const result = await productsCollection.findOne({
      _id: new ObjectId(req.params.id),
    });
    if (!result) return res.status(404).send({ message: "Product not found" });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Invalid ID" });
  }
});

// POST new product
app.post("/products", async (req, res) => {
  try {
    const newProduct = { ...req.body, createdAt: new Date() };
    const result = await productsCollection.insertOne(newProduct);
    res.status(201).send({ success: true, insertedId: result.insertedId });
  } catch (error) {
    res.status(500).send({ error: "Failed to add product" });
  }
});

// DELETE product
app.delete("/products/:id", async (req, res) => {
  try {
    const result = await productsCollection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.send({ success: result.deletedCount > 0 });
  } catch (error) {
    res.status(500).send({ error: "Failed to delete" });
  }
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`TrendMart Server running on http://localhost:${port}`);
  });
});
