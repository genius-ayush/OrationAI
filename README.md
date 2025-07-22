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

## Important SS

<img width="602" height="413" alt="createdWorkspace" src="https://github.com/user-attachments/assets/cce583b5-5717-4189-847f-aed44dead50d" />
<img width="1089" height="926" alt="createdAgent" src="https://github.com/user-attachments/assets/8efe4609-6733-4940-a35f-9eb823fd3ca1" />
<img width="1658" height="926" alt="extraFeatures" src="https://github.com/user-attachments/assets/b6556313-dd86-43ce-b59d-dfc197c4b91f" />
