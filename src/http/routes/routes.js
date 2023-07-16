const { Router } = require("express");
const xmlParterRoute = require("../../modules/xml-parser/routes/xmlParser.route");

const routes = new Router();

routes.use("/", xmlParterRoute);

module.exports = routes;
