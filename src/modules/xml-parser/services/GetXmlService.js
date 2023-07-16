const { XMLParser, XMLBuilder } = require("fast-xml-parser");
const xml = require("./xml");
module.exports = class XmlParserService {
  async execute() {
    const parser = new XMLParser();
    const builder = new XMLBuilder();
    const obj = parser.parse(xml);
    const xmlParsed = builder.build(obj);
    return xmlParsed.replace(
      "<?xml?>",
      '<?xml version="1.0" encoding="utf-8"?>'
    );
  }
};
