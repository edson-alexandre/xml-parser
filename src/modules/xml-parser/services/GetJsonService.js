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

  toCamelCase = (value) => {
    if (Array.isArray(value)) {
      return value.map((v) => this.toCamelCase(v));
    } else if (value != null && value.constructor === Object) {
      return Object.keys(value).reduce(
        (result, key) => ({
          ...result,
          [camelCase(key)]: this.toCamelCase(value[key]),
        }),
        {}
      );
    }
    return value;
  };
};
