const { Router } = require("express");
const XmlParserController = require("../controllers/XmlParserController");

const xmlRoute = new Router();
const controller = new XmlParserController();

xmlRoute.get("/xml", controller.getXml);
xmlRoute.get("/json", controller.getJson);

module.exports = xmlRoute;
