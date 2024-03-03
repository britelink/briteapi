# briteAPI JavaScript SDK

The official JavaScript SDK for interfacing with briteAPI. This SDK simplifies interacting with briteAPI services directly from your JavaScript-based applications, whether in a Node.js, browser, or Next.js environment.

## Features

- Easy-to-use asynchronous methods for making HTTP requests to briteAPI endpoints.
- Comprehensive support for all briteAPI endpoints.
- Designed for versatility across server-side, client-side, and Next.js applications.

## Installation

Install the package via npm:

```bash
npm install briteapi --save
```

Or, if you prefer yarn:

```bash
yarn add briteapi
```

## Usage - see complete [documention](https://docs.britelink.io/)

### General Setup

First, import the SDK and initialize it with your API key:

#### Node.js or Vanilla JavaScript

```javascript
const { BriteAPI } = require("briteapi");
const briteAPI = new BriteAPI("your_api_key_here");
```

#### ES6 or TypeScript

```javascript
import { BriteAPI } from "briteapi";
const briteAPI = new BriteAPI("your_api_key_here");
```

### Making Requests

To make a GET request to an endpoint:

```javascript
// Example: Fetch data from the 'drugs' endpoint
briteAPI
  .fetch("drugs")
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

Replace `'drugs'` with the specific endpoint you wish to access.

### Next.js Projects

#### Setup Environment Variables

For Next.js applications, it's recommended to use environment variables to store your API key. Add your API key to your `.env.local` file:

```
NEXT_PRIVATE_BRITEAPI_KEY=your_api_key_here
```

#### Using the SDK in Next.js

Then, you can use the SDK in your pages or API routes as follows:

```javascript
// page.jsx
import { NextBriteAPI } from "briteapi";

export async function getData() {
  const briteAPI = new NextBriteAPI(process.env.NEXT_PRIVATE_BRITEAPI_KEY);

  try {
    const data = await briteAPI.fetch("drugs");
    console.log(data);
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}
```

## Available Methods

- `fetch(endpoint)`: Makes a GET request to the specified briteAPI endpoint.

## Handling Errors

The SDK throws errors when requests fail. It's important to handle these in your application:

```javascript
briteAPI
  .fetch("nonexistent_endpoint")
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error.message));
```

## Contributions

Contributions are very welcome! Feel free to open issues or submit pull requests on our [GitHub repository](https://github.com/britelink/briteapi-sdks).

## Support

For support, please open an issue on GitHub or reach out to our support team directly.

## License

This SDK is available under the MIT License. For more details, see the [LICENSE](LICENSE) file.

---

This revised README provides a comprehensive guide for using the briteAPI JavaScript SDK across various JavaScript environments, ensuring users can easily integrate it into their projects.
