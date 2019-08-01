const request = require('request');
const fs = require('fs')
const domain = process.argv[2]
const newFile = process.argv[3]

const fetcher = function (inputLink) {
  request (inputLink, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  fs.writeFile (newFile, body, (err) => {
    if (err) throw err;
    let stats = fs.statSync(newFile)
    let fileSizeInBytes = stats["size"]
    console.log('Downloaded and saved ' + fileSizeInBytes + " bytes to " + newFile);
    });
  });
}

console.log(fetcher(domain))