# 📞 Oration AI Call Trigger

This repo contains a simple JavaScript script and cURL command to trigger a telephony conversation using Oration AI's API.

## 🔧 Setup

1. Clone the repo  
2. Create a `.env` file with:
```
API_KEY=your-api-key
WORKSPACE_ID=your-workspace-id
AGENT_ID=your-agent-id
PHONE_NUMBER=+91XXXXXXXXXX
```

3. Install dependencies:
```bash
npm install
```

4. Run the script:
```bash
node createConversation.js
```

## 🧪 Test with cURL

```bash
curl --request POST \
  --url https://www.oration.ai/api/v1/conversations \
  --header "x-api-key: your-api-key" \
  --header "x-workspace-id: your-workspace-id" \
  --header "Content-Type: application/json" \
  --data '{
    "conversations": [
      {
        "agentId": "your-agent-id",
        "conversationType": "telephony",
        "toPhoneNumber": "+91XXXXXXXXXX",
        "dynamicVariables": {
          "customerName": "Ayush Rawal"
        }
      }
    ]
  }'
```

## ✅ .env is gitignored
