const express = require("express");
require("./models/dbConfig");
const app = express();
const Product = require("./models/productModel");

app.use(express.json());

// configure cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
//

app.get("/api/products", (req, res, next) => {
  Product.find()
    .then((products) => res.status(200).json({ products }))
    .catch((error) => res.status(400).json({ error }));
});

app.get("/api/products/:id", (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.status(200).json({ product: product }))
    .catch((error) => res.status(404).json({ error }));
});

app.post("/api/products", (req, res, next) => {
  const product = new Product({
    ...req.body,
  });
  product
    .save()
    .then((product) => res.status(201).json({ product }))
    .catch((error) => res.status(400).json({ error }));
});

app.put("/api/products/:id", (req, res, next) => {
  Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});

app.delete("/api/products/:id", (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server connected on port: 3000");
});
