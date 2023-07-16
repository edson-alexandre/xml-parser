const { camelCase } = require("lodash");

module.exports = toCamelCase = (value) => {
  if (Array.isArray(value)) {
    return value.map((v) => toCamelCase(v));
  } else if (value != null && value.constructor === Object) {
    return Object.keys(value).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: toCamelCase(value[key]),
      }),
      {}
    );
  }
  return value;
};
