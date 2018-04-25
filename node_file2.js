var fs = require('fs');

fs.writeFile('myfile.txt', 'Hello akshit garg!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});