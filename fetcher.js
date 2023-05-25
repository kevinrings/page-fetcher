const fs = require('fs');
const request = require('request');

const downloadFile = (url, filePath) => {
  request.get(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.error('Error occurred while writing the file:', error.message);
        return;
      }

      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    });
  });
};

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Please provide both a URL and a file path.');
  process.exit(1);
}

downloadFile(url, filePath);
