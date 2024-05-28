const { uniqueId } = require("lodash");

var userInformation = {
  required: ["firstName", "lastName", "usrName", "email"],
  authorized: ["firstName", "lastName", "usrName", "email", "phone"],
  uniqueId: ["username", "email"],
  elements: [],
};
module.exports = userInformation;
