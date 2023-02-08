const axios = require("axios");
const config = require("./config.json");

module.exports = {
  post: async function (url, headers, body) {
    try {
      const response = await axios.post(url, body, headers);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  get: async function (url, headers, body) {
    try {
      const response = await axios.get(url, body, headers);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
