const axios = require("axios");
const config = require("./config.json");

module.exports = {
  createWorkspace: async function (url, headers, body) {
    try {
      const response = await axios.post(url, body, headers);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  updateWorkspace: async function (url, headers, body) {
    try {
      const response = await axios.get(url, body, headers);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  createConfiguration: async function (url, headers, body) {
    try {
      const response = await axios.get(url, body, headers);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  listConfiguration: async function (url, headers, body) {
    try {
      const response = await axios.get(url, body, headers);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
