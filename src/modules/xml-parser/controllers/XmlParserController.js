const GetJsonService = require("../services/GetJsonService");
const GetXmlService = require("../services/GetXmlService");

module.exports = class XmlParserController {
  async getXml(req, res) {
    const service = new GetXmlService();
    const result = await service.execute();
    res.set("Content-Type", "text/xml");
    res.send(result);
  }

  async getJson(req, res) {
    const service = new GetJsonService();
    const result = await service.execute();
    res.json(result);
  }
};
