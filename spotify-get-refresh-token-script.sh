#!/bin/bash

# Function to URL encode strings
urlencode() {
    local length="${#1}"
    for (( i = 0; i < length; i++ )); do
        local c="${1:i:1}"
        case $c in
            [a-zA-Z0-9.~_-]) printf "$c" ;;
            *) printf '%%%02X' "'$c" ;;
        esac
    done
}

# Ask for the Spotify CLIENT_ID
# This is the unique identifier for your application you get from the Spotify Developer Dashboard.
read -p "Enter your Spotify CLIENT_ID: " CLIENT_ID

# Ask for the Spotify CLIENT_SECRET
# This is the secret key for your application you get from the Spotify Developer Dashboard.
read -p "Enter your Spotify CLIENT_SECRET: " CLIENT_SECRET

# Ask for the SCOPES
# These are the permissions your application requests.
# Example input: user-read-currently-playing user-read-recently-played user-top-read
read -p "Enter the scopes separated by a space: " SCOPES

# Ask for the REDIRECT_URI
# This is the URL to which Spotify will redirect after authentication.
# Example input: http://localhost:3000/callback
read -p "Enter your REDIRECT_URI: " REDIRECT_URI

# Validate inputs
if [[ -z "$CLIENT_ID" || -z "$CLIENT_SECRET" || -z "$SCOPES" || -z "$REDIRECT_URI" ]]; then
    echo "All inputs are required."
    exit 1
fi

# Encode SCOPES and REDIRECT_URI
ENCODED_SCOPES=$(urlencode "$SCOPES")
ENCODED_REDIRECT_URI=$(urlencode "$REDIRECT_URI")

# Generate the Spotify authentication URL
AUTH_URL="https://accounts.spotify.com/authorize?response_type=code&client_id=$CLIENT_ID&scope=$ENCODED_SCOPES&redirect_uri=$ENCODED_REDIRECT_URI"
echo "Visit this URL for authentication: $AUTH_URL"

# Instruct the user to find the access code
# After visiting the URL and authorizing the application, Spotify will redirect you to the REDIRECT_URI.
# The URL will have a 'code' parameter in it. This is the access code.
# Example: http://localhost:3000/callback?code=AQAEU0Kx57...
echo "After authorization, check your browser's address bar for the URL you are redirected to."
echo "It will contain a 'code' parameter. Copy and enter that code here."

# Read the access code from user
read -p "Enter the access code from the URL: " ACCESS_CODE

# Check if the access code is provided
if [[ -z "$ACCESS_CODE" ]]; then
    echo "Access code is required."
    exit 1
fi

# Get the refresh token using the access code
RESPONSE=$(curl -s -d client_id="$CLIENT_ID" -d client_secret="$CLIENT_SECRET" -d grant_type=authorization_code -d code="$ACCESS_CODE" -d redirect_uri="$ENCODED_REDIRECT_URI" https://accounts.spotify.com/api/token)

# Extract and display the refresh token
REFRESH_TOKEN=$(echo "$RESPONSE" | grep -o '"refresh_token":"[^"]*' | cut -d'"' -f4)

if [[ -z "$REFRESH_TOKEN" ]]; then
    echo "Failed to retrieve the refresh token."
    exit 1
else
    echo "Refresh token: $REFRESH_TOKEN"
fi
