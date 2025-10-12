import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // 👈 Needed to parse JSON body

// routes
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);
app.use(express.static(path.join(__dirname, 'classroom-booking/build')));

// Handle all GET requests by sending back React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'classroom-booking/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port", process.env.PORT || 5000);
});
