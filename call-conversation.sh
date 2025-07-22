
set -a
source .env
set +a

curl --request POST \
  --url https://www.oration.ai/api/v1/conversations \
  --header "x-api-key: $API_KEY" \
  --header "x-workspace-id: $WORKSPACE_ID" \
  --header "Content-Type: application/json" \
  --data "{
    \"conversations\": [
      {
        \"agentId\": \"$AGENT_ID\",
        \"conversationType\": \"telephony\",
        \"toPhoneNumber\": \"$PHONE_NUMBER\",
        \"dynamicVariables\": {
          \"customerName\": \"Ayush Rawal\"
        }
      }
    ]
  }"
