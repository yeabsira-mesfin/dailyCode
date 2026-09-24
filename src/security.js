function isValidIdentifier(value) {
  return typeof value === "string" && /^[1-9][0-9]{0,9}$/.test(value);
}

module.exports = { isValidIdentifier };
