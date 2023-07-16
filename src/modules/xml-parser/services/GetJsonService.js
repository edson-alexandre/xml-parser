const { XMLParser } = require("fast-xml-parser");
const { camelCase } = require("lodash");
const xml = require("./xml");
module.exports = class GetJsonService {
  async execute() {
    const parser = new XMLParser();
    const obj = parser.parse(xml);
    delete obj["?xml"];
    return this.camelizeKeys(obj);
  }

  camelizeKeys = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map((v) => this.camelizeKeys(v));
    } else if (obj != null && obj.constructor === Object) {
      return Object.keys(obj).reduce(
        (result, key) => ({
          ...result,
          [camelCase(key)]: this.camelizeKeys(obj[key]),
        }),
        {}
      );
    }
    return obj;
  };
};
