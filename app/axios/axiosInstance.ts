const axios = require("axios").default;
const baseUrl = "http://10.0.2.2:3000";

// Invoking get method to perform a GET request
export const loginWithMockUserCreds = async () => {
  try {
    const url = `${baseUrl}/login`;
    const response = await axios.post(url, {
      username: "johndoe",
      email: "johndoe@yahoo.com",
    });
    console.log(`Bearer ${response.data}`);
    return response.data;
  } catch (error) {
    console.log("Error. Something went wrong with the request.");

    console.log(JSON.stringify(error, null, 4));
  }
};
