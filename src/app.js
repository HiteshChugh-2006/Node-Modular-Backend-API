import express from "express";
import cors from "cors";
import productRoutes from "./modules/products/product.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Product API running ✅" });
});

app.use("/api/products", productRoutes);

export default app;