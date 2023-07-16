const { XMLParser } = require("fast-xml-parser");
const xml = require("./xml");
module.exports = class GetJsonService {
  async execute() {
    const parser = new XMLParser();
    const obj = parser.parse(xml);
    delete obj["?xml"];
    return obj;
  }
};
