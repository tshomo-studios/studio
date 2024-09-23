npm install

# Create the .ssh directory if it doesn't exist
mkdir -p ~/.ssh

# Check if the SSH_PRIVATE_KEY_PATH environment variable is set
if [ -z "$SSH_PRIVATE_KEY_PATH" ]; then
  echo "SSH_PRIVATE_KEY_PATH is not set. Exiting."
  exit 1
fi

# Copy the private key from the specified path
cp "$SSH_PRIVATE_KEY_PATH" ~/.ssh/id_rsa

# Set the appropriate permissions for the private key
chmod 600 ~/.ssh/id_rsa

git config --global --add safe.directory /workspaces/studio && 
git config --global user.email "$GIT_USER_EMAIL" && 
git config --global user.name "GIT_USER_NAME"