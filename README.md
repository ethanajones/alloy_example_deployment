## Overview

This project is a superrr basic app with a React frontend and Express backend. This app shows how we could integrate Alloy with Nexum [Alloy's Unified API](https://runalloy.com/unified-api/).

The best way to understand this is to build it yourself, here's the quick start guide [Alloy Quick Start](https://docs-uapi.runalloy.com/docs/quick-start). But I will also include how to run my current code.

## Installation

To get started, you will need to an API key from Alloy Unified API. You can obtain one by signing up for a free account [here](https://runalloy.com/signup/) then navigating to Settings > API Keys. Once you have your API key, in the `config.js` file in the root of the directory. Add your API key there.

### Server Set Up

Next, navigate to the `server` directory and install the npm modules and start the server with the following commands:

```
cd server
npm install
node server.js
```

### Frontend Set Up

To set up the frontend, navigate to the `client` directory. Install the dependencies and start the frontend app using the following commands:

```cd client
npm install
npm start
```
