const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const PORT = 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log('Server is running.');
});