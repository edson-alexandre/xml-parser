const { XMLParser } = require("fast-xml-parser");
const { camelCase } = require("lodash");
const xml = require("./xml");
module.exports = class GetJsonService {
  async execute() {
    const parser = new XMLParser();
    const obj = parser.parse(xml);
    delete obj["?xml"];
    return this.toCamelCase(obj);
  }

  toCamelCase = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map((v) => this.toCamelCase(v));
    } else if (obj != null && obj.constructor === Object) {
      return Object.keys(obj).reduce(
        (result, key) => ({
          ...result,
          [camelCase(key)]: this.toCamelCase(obj[key]),
        }),
        {}
      );
    }
    return obj;
  };
};
