

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const userRoutes = require("./route");
const app = express();
const port = process.env.PORT || 3000;

// Debugging: Check if environment variables are loaded
console.log("MONGO_URI:", process.env.DBURI);
console.log("PORT:", process.env.PORT);

// CORS Configuration
const corsOptions = {
  origin: "https://your-hr-frontend-iota.vercel.app", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors({
  origin: 'https://your-hr-tan.vercel.app' 
}));
app.use(express.json());

const DB_URI = process.env.DBURI.replace("<password>", process.env.DBPASSWORD);
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection successful");
  })
  .catch((err) => {
    console.error("DB Connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/api", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
