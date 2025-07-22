const axios = require("axios");
require('dotenv').config();


const API_KEY = process.env.API_KEY;
const WORKSPACE_ID = process.env.WORKSPACE_ID;
const AGENT_ID = process.env.AGENT_ID;
const PHONE_NUMBER = process.env.PHONE_NUMBER;

async function triggerCall() {
  const url = "https://www.oration.ai/api/v1/conversations";

  const data = {
    conversations: [
      {
        agentId: AGENT_ID,
        conversationType: "telephony",
        toPhoneNumber: PHONE_NUMBER,
        dynamicVariables: {
          customerName: "Ayush Rawal"
          // You can add more dynamic variables as needed by your agent prompt
        }
      }
    ]
  };

  const headers = {
    "x-api-key": API_KEY,
    "x-workspace-id": WORKSPACE_ID,
    "Content-Type": "application/json"
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log("✅ Call triggered successfully:");
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error("❌ Failed to trigger call:");
    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

triggerCall();
