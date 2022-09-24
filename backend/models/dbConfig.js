const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Elisha:angeEliseeAtlas0001@test-route.zq75v7s.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
