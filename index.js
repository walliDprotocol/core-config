const axios = require("axios");
const config = require("./config.json");

module.exports = {
  auth: async function (clientId, clientSecret) {
    try {
      const response = await axios.post(
        url,
        {
          clientId: clientId,
          clientSecret: clientSecret,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  creteConfig: async function (name, displayName, providers) {
    try {
      const response = await axios.post(
        config.API_BASE + config.GET_CONFIG,
        { workspaceId: configId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
