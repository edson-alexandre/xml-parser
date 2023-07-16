const express = require("express");
const routes = require("./http/routes/routes");

const app = new express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(routes);

app.use("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000");
});
