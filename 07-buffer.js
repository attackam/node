const fs = require('fs');
fs.readFile('./111.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);

})