# briteAPI JavaScript SDK

The official JavaScript SDK for interfacing with the briteAPI. This SDK allows you to easily interact with the briteAPI services directly from your JavaScript-based applications.

## Features

- Simple to use async methods for making HTTP requests to the briteAPI.
- Supports all briteAPI endpoints with easy-to-use methods.
- Customizable for both server and client-side usage.

## Installation

Install the package with npm:

```bash
npm install briteapi-js-sdk --save
```

Or with yarn:

```bash
yarn add briteapi-js-sdk
```

## Usage

First, import the SDK and initialize it with your API key:

```javascript
const BriteAPI = require("briteapi-js-sdk");
const briteAPI = new BriteAPI("your_api_key_here");
```

To make a GET request to an endpoint:

```javascript
// Get data from a specific endpoint
briteAPI
  .getData("endpoint_path_here")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

Replace `'endpoint_path_here'` with the path to the specific endpoint you want to access, such as `'drugs'` or `'chemistries'`.

## Available Methods

Currently, the SDK provides the following methods:

- `getData(endpoint)`: Makes a GET request to the specified endpoint.

## Handling Errors

The SDK methods throw errors when requests fail. Make sure to handle these errors appropriately in your application:

```javascript
briteAPI
  .getData("endpoint_path_here")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  });
```

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request on our [GitHub repository](https://github.com/britelink/briteapi-sdks/tree/main/briteapi-js-sdk).

## Support

If you encounter any problems or have a question, please submit an issue on GitHub or contact our support team.

## License

This SDK is released under the MIT License. See the [LICENSE](LICENSE) file for details.

```

```
