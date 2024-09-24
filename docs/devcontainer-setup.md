# Setup a devcontainer

[Dev Container](https://medium.com/@zahedialfurquan20/react-vscode-dev-containers-90dc66732555)

[Video for devcontainer benefits](https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=310s)

## Previous setup

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/docker-existing-dockerfile
{
	// "name": "Existing Dockerfile",
	"name": "Node.js & Typescript",

    "image": "mcr.microsoft.com/devcontainers/typescript-node:0-18"
	// "build": {
	// 	// Sets the run context to one level up instead of the .devcontainer folder.
	// 	"context": "..",
	// 	// Update the 'dockerFile' property if you aren't using the standard 'Dockerfile' filename.
	// 	"dockerfile": "../Dockerfile"
	// },
	// "features": {
	// 	"ghcr.io/devcontainers/features/node:1": {},
	// 	"ghcr.io/devcontainers-community/npm-features/typescript:1": {}
	// },

	// Features to add to the dev container. More info: https://containers.dev/features.
	// "features": {},

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	// "forwardPorts": [3000]

	// Uncomment the next line to run commands after the container is created.
	// "postCreateCommand": "cat /etc/os-release",

	// Configure tool-specific properties.
	// "customizations": {},

	// Uncomment to connect as an existing user other than the container default. More info: https://aka.ms/dev-containers-non-root.
	// "remoteUser": "devcontainer"
}
```