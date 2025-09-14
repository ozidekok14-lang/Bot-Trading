import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// Route utama
app.get("/", (req, res) => {
  res.send("✅ Trading bot dashboard is live and operational 🚀");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
