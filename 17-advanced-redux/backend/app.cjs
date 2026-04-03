const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require('cors');

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
}));
const PORT = 5000;
const CART_FILE = path.join(__dirname, "cart.json");


app.use(express.json());


// Helper: read cart from file
const readCart = () => {
    if (!fs.existsSync(CART_FILE)) return [];
    const data = fs.readFileSync(CART_FILE, "utf-8");
    return JSON.parse(data);
};

// Helper: write cart to file
const writeCart = (items) => {
    fs.writeFileSync(CART_FILE, JSON.stringify(items, null, 2));
};

// GET /cart — return all cart items
app.get("/cart", (req, res) => {
    const cart = readCart();
    res.json(cart);
});

// POST /cart — add an item to the cart
// Body: { id, name, price, quantity }
app.post("/cart", (req, res) => {
    const { id, title, price, quantity = 1, totalPrice } = req.body;
    console.log(req.body);

    if (!id || !title || price == null) {
        return res.status(400).json({ error: "id, name, and price are required" });
    }

    const cart = readCart();
    const existing = cart.find((item) => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, title, price, quantity, totalPrice });
    }

    writeCart(cart);
    res.status(201).json({ message: "Item added", cart });
});

// DELETE /cart/:id — remove an item by id
app.delete("/cart/:id", (req, res) => {
    const cart = readCart();
    const filtered = cart.filter((item) => item.id !== req.params.id);

    if (filtered.length === cart.length) {
        return res.status(404).json({ error: "Item not found" });
    }

    writeCart(filtered);
    res.json({ message: "Item removed", cart: filtered });
});

// DELETE /cart — clear the entire cart
app.delete("/cart", (req, res) => {
    writeCart([]);
    res.json({ message: "Cart cleared" });
});

app.listen(PORT, () => {
    console.log(`Cart API running at http://localhost:${PORT}`);
});