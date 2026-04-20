const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API escuchando en puerto ${PORT}`));
