var http = require('http');
var fs = require('fs');

var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
// http.createServer(function (req, res) {

  // Read file asynchronously, callback function is called eventually
//   fs.writeFile('mynewfile3.txt', 'This is my text of course', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });

//   console.log('This logging is not blocked by the file read!');
// }).listen(8080);
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });