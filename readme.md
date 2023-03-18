# fileGPT

fileGPT is a powerful and easy-to-use CLI tool that allows you to interact with the OpenAI GPT-4 & GPT-3.5 model to get code completion suggestions and apply the instructions to your code directly. 

## Installation

To install this package globally, you can use the following command:

```bash
npm install -g filegpt
```

## Usage

```bash
npx filegpt <API_KEY> <Instruction> <File_Path>
```

- `<API_KEY>`: Your OpenAI API key.
- `<Instruction>`: The instruction you want to provide to the GPT-3.5-turbo model.
- `<File_Path>`: The path to the file you want to apply the changes to.

## Example

Suppose you have the following code in a file called `example.js`:

```javascript
function helloWorld() {
  console.log("Hello, world!");
}
```

And you want to add a new function to say goodbye. You can run the following command:

```bash
npx filegpt <your_openai_api_key> "add a function to say goodbye" example.js
```

The CLI tool will interact with the GPT- 3.5/4 model and update the file with the new function:

```javascript
function helloWorld() {
  console.log("Hello, world!");
}

function sayGoodbye() {
  console.log("Goodbye!");
}
```

## Dependencies

- [openai](https://www.npmjs.com/package/openai): The official OpenAI API wrapper for Node.js.
- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for Node.js.


## Support

If you encounter any issues or have any feature requests, please feel free to create an issue on the [GitHub repository](https://github.com/ezzcodeezzlife/filegpt).

## Contributing

Contributions are always welcome! Please fork the repository, make your changes, and submit a pull request.

---

**Note**: This package uses the OpenAI API, which may have its usage costs. Please review the [OpenAI Pricing](https://openai.com/pricing) for more information.