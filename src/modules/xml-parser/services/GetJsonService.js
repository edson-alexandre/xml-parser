const { XMLParser } = require("fast-xml-parser");

const xml = require("./xml");
module.exports = class GetJsonService {
  async execute() {
    const parser = new XMLParser();
    const obj = parser.parse(xml);
    delete obj["?xml"];
    return this.toCamelCase(obj);
  }

  toCamelCase(obj) {
    let newO, origKey, newKey, value;
    if (obj instanceof Array) {
      return obj.map(function (value) {
        if (typeof value === "object") {
          value = this.toCamelCase(value);
        }
        return value;
      });
    } else {
      newO = {};
      for (origKey in obj) {
        if (obj.hasOwnProperty(origKey)) {
          newKey = (
            origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey
          ).toString();
          value = obj[origKey];
          if (
            value instanceof Array ||
            (value !== null && value.constructor === Object)
          ) {
            value = this.toCamelCase(value);
          }
          newO[newKey] = value;
        }
      }
    }
    return newO;
  }
};
