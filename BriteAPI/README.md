# BriteAPI

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

## Making Requests

When making API requests using the BriteAPI SDK, it's important to remember that the SDK is pre-configured with the base URL (`https://www.britelink.io/api/`). This means you should **not** include the base URL in your endpoint strings; simply start with the API version and endpoint path.

### Basic Endpoint

For primary endpoints, start directly with the version (`v1/`) followed by the endpoint name. Do **not** add the base URL (`https://www.britelink.io/api/`), as the SDK already handles this for you.

```javascript
// Correct usage - No need to specify the full URL
briteAPI
  .fetch("v1/drugs")
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### Secondary and Quaternary Endpoints

Similarly, for accessing secondary or quaternary endpoints, you only need to specify the endpoint path starting from the version indicator (`v1/`), followed by the resource name and any required parameters or IDs. The SDK takes care of appending this to the base URL.

Example for a secondary endpoint:

```javascript
const drugId = "12345"; // Example ID
// Just use the endpoint and the SDK will append it to the base URL
briteAPI
  .fetch(`v1/drugs/${drugId}`)
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

And for a quaternary endpoint with additional query parameters:

```javascript
const drugId = "12345"; // Example ID for the primary resource
// Directly specify the endpoint with parameters; no need for the full URL
briteAPI
  .fetch(`v1/drugs/${drugId}/details?f=true&cursor=someValue`)
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### Dynamic Parameters

For dynamic parameters such as IDs, use JavaScript template literals for ease of insertion into the endpoint string. Remember, there's no need to add the base URL at the beginning of your endpoint string.

Example using a dynamic parameter:

```javascript
const userId = "abc123";
// Directly start with the API version and endpoint path
briteAPI
  .fetch(`v1/users/${userId}`)
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

## For specific end points refer to the menu on our [documentation](docs.britelink.io).

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
"use client";
import React, { useState, useEffect } from "react";

import { NextBriteAPI } from "briteapi";

const SDK = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const briteAPI = new NextBriteAPI(
        "secret_699038a1-a1de-4f70-8e63-308f2c8caf48"
      );
      try {
        const fetchedData = await briteAPI.fetch("v1/drugs");
        setData(fetchedData);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className="max-w-5xl m-auto w-full px-4">
      <h1>Hello from BriteLink SDK</h1>
      {error && <p>Error fetching data</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Pretty print the JSON data
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default SDK;
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

Contributions are very welcome! Feel free to open issues or submit pull requests on our [GitHub repository](https://github.com/britelink/briteapi/tree/main/BriteAP).

## Support

For support, please open an issue on GitHub or reach out to our support team directly.

## License

This SDK is available under the MIT License. For more details, see the [LICENSE](https://github.com/britelink/briteapi/tree/main/BriteAP) file.

---
