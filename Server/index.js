import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js"; 
import contactRoutes from "./routes/contactRoutes.js";
import marineRoutes from "./routes/marineRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
// app.use(cors({
//   origin: process.env.CLIENT_URL || "http://localhost:5173",
//   credentials: true,
// }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/newsletter", newsletterRoutes); 
app.use("/api/contact", contactRoutes);
app.use("/api/marine", marineRoutes);

app.get("/", (req, res) => {
  res.send("Leadway backend is running...");
});

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
